import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuration from firebase-applet-config.json
const firebaseConfig = {
  apiKey: "AIzaSyB13GXmuIYR_9eZxOzGIE2nxr-qGQmBv40",
  authDomain: "studio-9060338047-ae42f.firebaseapp.com",
  projectId: "studio-9060338047-ae42f",
  storageBucket: "studio-9060338047-ae42f.firebasestorage.app",
  messagingSenderId: "384381417040",
  appId: "1:384381417040:web:60b23e252588bd4a598355"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Use the specific custom firestoreDatabaseId from the configuration
export const db = getFirestore(app, "ai-studio-caa1abeb-05b9-47e5-a748-782b8bb8d11d");

export enum OperationType {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  LIST = "list",
  GET = "get",
  WRITE = "write",
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error("Firestore Error: ", JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}
