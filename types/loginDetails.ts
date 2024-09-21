export interface loginDetails {
  email: string;
  password: string;
}

type VerifiedStatus = "pending" | "verified" | "rejected";

export interface userDetails {
  email: string;
  role: string;
  verified: VerifiedStatus;  
  password: string;
}