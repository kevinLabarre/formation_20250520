import { ProfileContent } from "./profile-content.interface";

export interface Profile {
  success: number,
  message: string,
  content: ProfileContent[]
}
