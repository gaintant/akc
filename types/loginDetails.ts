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

export interface addUser {
  email: string;
  verified: VerifiedStatus;
}

export interface tokenDetails{
  email: string;
  role: string;
}