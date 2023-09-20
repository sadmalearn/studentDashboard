import { getActivProfile } from "../Profiles/Profiles";
import { ProfileConstant } from "./ProfileConstants";

const baseURL = getActivProfile(ProfileConstant.Dev);

export const Url = {
  welcome : baseURL + 'welcome',
  getAllStudents : baseURL + 'getAllStudents'
}