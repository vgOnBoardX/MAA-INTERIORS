import { useState, useEffect, FormEvent } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy
} from "firebase/firestore";
import {
  LogIn,
  LogOut,
  Mail,
  Phone,
  Calendar,
  Layers,
  Clock,
  Briefcase,
  UserPlus,
  Trash2,
  CheckCircle,
  FileText,
  AlertCircle,
  RefreshCw,
  Search
} from "lucide-react";
import { auth, db, handleFirestoreError, OperationType } from "../lib/firebase";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  status: "new" | "contacted";
}

interface AppointmentSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  preferredDate: string;
  preferredTime: string;
  details: string;
  createdAt: string;
  status: "pending" | "confirmed" | "completed";
}

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  // Credentials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSubmitting, setAuthSubmitting] = useState(false);

  // Data Dashboard
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [appointments, setAppointments] = useState<AppointmentSubmission[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataError, setDataError] = useState<string | null>(null);

  // Search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [dashboardTab, setDashboardTab] = useState<"appointments" | "contacts">("appointments");

  // Track user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Fetch submissions from Firestore
  const fetchDashboardData = async () => {
    if (!user) return;
    setDataLoading(true);
    setDataError(null);

    try {
      // 1. Fetch contacts
      const contactsQuery = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
      const contactsSnapshot = await getDocs(contactsQuery);
      const contactsList = contactsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as ContactSubmission[];
      setContacts(contactsList);

      // 2. Fetch appointments
      const appointmentsQuery = query(collection(db, "appointments"), orderBy("createdAt", "desc"));
      const appointmentsSnapshot = await getDocs(appointmentsQuery);
      const appointmentsList = appointmentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as AppointmentSubmission[];
      setAppointments(appointmentsList);
    } catch (err: any) {
      console.error("Error fetching dashboard data:", err);
      setDataError("Could not retrieve submissions from database. Ensure your admin permission rules are in place.");
      handleFirestoreError(err, OperationType.LIST, "contacts");
    } finally {
      setDataLoading(false);
    }
  };

  // Fetch when user state resolves to logged in
  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  // Auth Submit Handlers
  const handleAuthSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSubmitting(true);

    if (!email || !password) {
      setAuthError("Email and password fields are required.");
      setAuthSubmitting(false);
      return;
    }

    try {
      if (authMode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setAuthMode("login");
        setAuthError("Account created! You can now log in using your credentials.");
      }
    } catch (err: any) {
      console.error("Auth error:", err);
      if (err.code === "auth/user-not-found") {
        setAuthError("No admin account registered with this email.");
      } else if (err.code === "auth/wrong-password") {
        setAuthError("Incorrect password provided.");
      } else if (err.code === "auth/weak-password") {
        setAuthError("Password must be at least 6 characters.");
      } else if (err.code === "auth/email-already-in-use") {
        setAuthError("This email address is already registered.");
      } else {
        setAuthError(err.message || "Authentication failed. Try again.");
      }
    } finally {
      setAuthSubmitting(false);
    }
  };

  // Sign out handler
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Signout error", err);
    }
  };

  // Toggle Contact status (new <-> contacted)
  const toggleContactStatus = async (id: string, currentStatus: "new" | "contacted") => {
    const nextStatus = currentStatus === "new" ? "contacted" : "new";
    try {
      await updateDoc(doc(db, "contacts", id), {
        status: nextStatus
      });
      // update state
      setContacts(contacts.map(c => c.id === id ? { ...c, status: nextStatus } : c));
    } catch (err) {
      console.error("Error updating contact status:", err);
      alert("Failed to update status.");
      handleFirestoreError(err, OperationType.UPDATE, `contacts/${id}`);
    }
  };

  // Cycle Appointment status (pending -> confirmed -> completed -> pending)
  const cycleAppointmentStatus = async (id: string, currentStatus: "pending" | "confirmed" | "completed") => {
    let nextStatus: "pending" | "confirmed" | "completed" = "pending";
    if (currentStatus === "pending") nextStatus = "confirmed";
    else if (currentStatus === "confirmed") nextStatus = "completed";

    try {
      await updateDoc(doc(db, "appointments", id), {
        status: nextStatus
      });
      setAppointments(appointments.map(a => a.id === id ? { ...a, status: nextStatus } : a));
    } catch (err) {
      console.error("Error updating appointment status:", err);
      alert("Failed to update status.");
      handleFirestoreError(err, OperationType.UPDATE, `appointments/${id}`);
    }
  };

  // Delete submission
  const handleDeleteSubmission = async (collectionName: "contacts" | "appointments", id: string) => {
    if (!window.confirm("Are you sure you want to delete this submission? This action is irreversible.")) {
      return;
    }

    try {
      await deleteDoc(doc(db, collectionName, id));
      if (collectionName === "contacts") {
        setContacts(contacts.filter(c => c.id !== id));
      } else {
        setAppointments(appointments.filter(a => a.id !== id));
      }
    } catch (err) {
      console.error("Error deleting document:", err);
      alert("Failed to delete document.");
      handleFirestoreError(err, OperationType.DELETE, `${collectionName}/${id}`);
    }
  };

  // Filter lists based on search query
  const filteredAppointments = appointments.filter((app) => {
    const search = searchQuery.toLowerCase();
    return (
      app.name.toLowerCase().includes(search) ||
      app.email.toLowerCase().includes(search) ||
      app.phone.includes(search) ||
      app.projectType.toLowerCase().includes(search) ||
      (app.details && app.details.toLowerCase().includes(search))
    );
  });

  const filteredContacts = contacts.filter((c) => {
    const search = searchQuery.toLowerCase();
    return (
      c.name.toLowerCase().includes(search) ||
      c.email.toLowerCase().includes(search) ||
      c.phone.includes(search) ||
      c.message.toLowerCase().includes(search)
    );
  });

  if (loading) {
    return (
      <div className="pt-32 pb-16 flex items-center justify-center min-h-screen bg-linen font-sans">
        <div className="text-center">
          <RefreshCw className="animate-spin text-espresso mx-auto mb-4" size={32} />
          <span className="text-stone text-sm">Verifying administration authorization...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-linen font-sans" id="admin-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Auth Screen View */}
        {!user ? (
          <div className="max-w-md mx-auto bg-linen p-8 rounded-2xl border border-stone/15 shadow-md">
            <div className="text-center mb-8">
              <span className="font-serif text-2xl font-bold text-espresso block mb-1">Maa Interiors</span>
              <span className="font-sans text-xs text-stone tracking-wider font-semibold uppercase">
                Internal Management Portal
              </span>
            </div>

            {authError && (
              <div className="bg-amber-50 text-amber-950 border border-amber-200 p-4 rounded-lg flex gap-3 text-xs mb-6 leading-relaxed">
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-amber-700" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-2">
                  Admin Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@maainteriors.in"
                  className="w-full bg-linen/50 border border-stone/20 rounded px-4 py-3 text-sm focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-linen/50 border border-stone/20 rounded px-4 py-3 text-sm focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={authSubmitting}
                className="w-full bg-espresso hover:bg-espresso/95 text-linen font-medium py-3.5 rounded flex items-center justify-center gap-2 text-sm shadow cursor-pointer disabled:opacity-75"
              >
                {authMode === "login" ? (
                  <>
                    <LogIn size={16} />
                    Sign In to Dashboard
                  </>
                ) : (
                  <>
                    <UserPlus size={16} />
                    Register Owner Admin
                  </>
                )}
              </button>
            </form>

            <div className="border-t border-stone/10 mt-8 pt-6 flex justify-between items-center text-xs text-stone">
              <span>Secure authentication layer</span>
              <button
                onClick={() => {
                  setAuthMode(authMode === "login" ? "register" : "login");
                  setAuthError(null);
                }}
                className="hover:underline font-bold text-espresso"
              >
                {authMode === "login" ? "Create owner credentials" : "Back to Sign In"}
              </button>
            </div>
          </div>
        ) : (
          /* Logged In Dashboard View */
          <div>
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone/10 pb-8 mb-10 gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-stone block mb-2">
                  ADMINISTRATIVE CONSOLE
                </span>
                <h1 className="font-serif text-3xl font-bold text-espresso flex items-center gap-3">
                  Studio Lead Pipeline
                  <span className="text-xs bg-espresso text-linen px-2.5 py-1 rounded-full font-sans font-normal">
                    OWNER
                  </span>
                </h1>
                <p className="text-stone text-xs mt-1">
                  Logged in as: <strong className="text-espresso font-semibold">{user.email}</strong>
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={fetchDashboardData}
                  disabled={dataLoading}
                  className="inline-flex items-center justify-center border border-stone/20 hover:border-espresso px-4 py-2.5 rounded text-xs font-semibold text-espresso bg-linen transition-all disabled:opacity-50 cursor-pointer"
                >
                  <RefreshCw size={14} className={`mr-2 ${dataLoading ? "animate-spin" : ""}`} />
                  Refresh
                </button>
                <button
                  onClick={handleSignOut}
                  className="inline-flex items-center justify-center bg-espresso hover:bg-espresso/90 text-linen px-4 py-2.5 rounded text-xs font-semibold transition-all cursor-pointer"
                >
                  <LogOut size={14} className="mr-2" />
                  Secure Exit
                </button>
              </div>
            </div>

            {/* Dashboard Controls: Tabs & Search Bar */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8 bg-linen">
              {/* Tab Toggles */}
              <div className="md:col-span-6 flex p-1 bg-stone/5 border border-stone/15 rounded-lg" role="tablist">
                <button
                  role="tab"
                  aria-selected={dashboardTab === "appointments"}
                  onClick={() => setDashboardTab("appointments")}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                    dashboardTab === "appointments"
                      ? "bg-linen text-espresso shadow-sm font-black"
                      : "text-stone hover:text-espresso"
                  }`}
                >
                  Consultation Bookings ({appointments.length})
                </button>
                <button
                  role="tab"
                  aria-selected={dashboardTab === "contacts"}
                  onClick={() => setDashboardTab("contacts")}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                    dashboardTab === "contacts"
                      ? "bg-linen text-espresso shadow-sm font-black"
                      : "text-stone hover:text-espresso"
                  }`}
                >
                  Quick Messages ({contacts.length})
                </button>
              </div>

              {/* Search Lead */}
              <div className="md:col-span-6 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone" size={16} />
                <input
                  type="text"
                  placeholder="Search lead name, phone, details, email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-linen/50 border border-stone/20 rounded pl-10 pr-4 py-2.5 text-xs focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors"
                />
              </div>
            </div>

            {/* Error Banner */}
            {dataError && (
              <div className="bg-red-50 text-red-800 p-4 rounded-lg flex items-start gap-3 mb-6 border border-red-150 text-xs">
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                <span>{dataError}</span>
              </div>
            )}

            {/* Dashboard Main Lists */}
            {dataLoading ? (
              <div className="py-24 text-center border border-stone/10 rounded-xl bg-linen/50">
                <RefreshCw className="animate-spin text-espresso mx-auto mb-4" size={24} />
                <span className="text-stone text-xs font-medium">Syncing database documents...</span>
              </div>
            ) : (
              <div className="overflow-x-auto bg-linen border border-stone/15 rounded-xl shadow-sm">
                
                {/* 1. Appointments Table View */}
                {dashboardTab === "appointments" && (
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-espresso text-linen border-b border-stone/10 font-mono font-medium tracking-wide">
                        <th className="p-4 uppercase">Client Info</th>
                        <th className="p-4 uppercase">Project Type</th>
                        <th className="p-4 uppercase">Approx. Budget</th>
                        <th className="p-4 uppercase">Date & Time requested</th>
                        <th className="p-4 uppercase">Project Details</th>
                        <th className="p-4 uppercase text-center">Pipeline Status</th>
                        <th className="p-4 uppercase text-right">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone/10">
                      {filteredAppointments.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="p-12 text-center text-stone">
                            No consultation requests logged matching criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredAppointments.map((app) => (
                          <tr key={app.id} className="hover:bg-mist/10 transition-colors">
                            <td className="p-4">
                              <span className="font-serif font-bold text-espresso text-sm block">
                                {app.name}
                              </span>
                              <span className="text-stone block mt-0.5 font-sans">
                                {app.email}
                              </span>
                              <span className="text-stone block mt-0.5 font-sans">
                                {app.phone}
                              </span>
                              <span className="text-[10px] text-stone/50 block mt-1 font-mono">
                                Logged: {new Date(app.createdAt).toLocaleString()}
                              </span>
                            </td>
                            <td className="p-4">
                              <span className="inline-block bg-mist/50 text-espresso px-2 py-1 rounded font-medium">
                                {app.projectType}
                              </span>
                            </td>
                            <td className="p-4 font-mono font-semibold text-espresso">
                              {app.budgetRange}
                            </td>
                            <td className="p-4 font-sans">
                              <span className="block font-semibold text-espresso">{app.preferredDate}</span>
                              <span className="block text-stone mt-0.5">{app.preferredTime}</span>
                            </td>
                            <td className="p-4 max-w-xs">
                              <p className="text-stone leading-relaxed whitespace-pre-wrap line-clamp-3">
                                {app.details || "No secondary details logged."}
                              </p>
                            </td>
                            <td className="p-4 text-center">
                              {/* Interactive pipeline toggle tag */}
                              <button
                                onClick={() => cycleAppointmentStatus(app.id, app.status)}
                                className={`px-3 py-1.5 rounded-full font-bold font-sans text-[10px] uppercase transition-all tracking-wide ${
                                  app.status === "pending"
                                    ? "bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
                                    : app.status === "confirmed"
                                    ? "bg-blue-100 text-blue-900 border border-blue-300 hover:bg-blue-200"
                                    : "bg-green-100 text-green-900 border border-green-300 hover:bg-green-200"
                                }`}
                                title="Click to cycle status"
                              >
                                {app.status}
                              </button>
                            </td>
                            <td className="p-4 text-right">
                              <button
                                onClick={() => handleDeleteSubmission("appointments", app.id)}
                                className="p-2 text-stone hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                                aria-label="Delete booking"
                              >
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}

                {/* 2. Contacts Table View */}
                {dashboardTab === "contacts" && (
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-espresso text-linen border-b border-stone/10 font-mono font-medium tracking-wide">
                        <th className="p-4 uppercase">Sender</th>
                        <th className="p-4 uppercase">Methods of Contact</th>
                        <th className="p-4 uppercase">Message Content</th>
                        <th className="p-4 uppercase">Received Date</th>
                        <th className="p-4 uppercase text-center">Pipeline Status</th>
                        <th className="p-4 uppercase text-right">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone/10">
                      {filteredContacts.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="p-12 text-center text-stone">
                            No general messages logged matching criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredContacts.map((c) => (
                          <tr key={c.id} className="hover:bg-mist/10 transition-colors">
                            <td className="p-4 font-serif font-bold text-espresso text-sm">
                              {c.name}
                            </td>
                            <td className="p-4 font-sans">
                              {c.email && <span className="block text-stone">{c.email}</span>}
                              {c.phone && <span className="block text-stone mt-0.5">{c.phone}</span>}
                            </td>
                            <td className="p-4 max-w-sm">
                              <p className="text-stone leading-relaxed whitespace-pre-wrap">
                                {c.message}
                              </p>
                            </td>
                            <td className="p-4 font-mono text-stone">
                              {new Date(c.createdAt).toLocaleString()}
                            </td>
                            <td className="p-4 text-center">
                              {/* Status Toggle Button */}
                              <button
                                onClick={() => toggleContactStatus(c.id, c.status)}
                                className={`px-3 py-1.5 rounded-full font-bold font-sans text-[10px] uppercase transition-all tracking-wide ${
                                  c.status === "new"
                                    ? "bg-red-100 text-red-900 border border-red-300 hover:bg-red-200"
                                    : "bg-green-100 text-green-900 border border-green-300 hover:bg-green-200"
                                }`}
                                title="Click to toggle status"
                              >
                                {c.status}
                              </button>
                            </td>
                            <td className="p-4 text-right">
                              <button
                                onClick={() => handleDeleteSubmission("contacts", c.id)}
                                className="p-2 text-stone hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                                aria-label="Delete message"
                              >
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}

              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
