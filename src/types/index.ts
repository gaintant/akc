export type NavItem = {
  name: string;
  url: string;
};

export type PreRegisterState = {
  message: string;
  success: boolean;
  submitted: boolean;
};

export type PreRegistrationData = {
  email: string;
  City: string;
  State: string;
  Pincode: number;
  Surname: string;
  SchoolName: string;
  StreetAddress: string;
  SchoolWebsite: string;
  FirstName: string;
  DaytimeTelephoneNumber: string;
};
