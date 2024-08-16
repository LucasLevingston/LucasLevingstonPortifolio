import { CertificatesType } from './CertificatesType';
import { ExperienceType } from './ExperienceType';
import { FormationType } from './FormationType';
import { HardSkillsType } from './HardSkillsType';
import { ProjectType } from './ProjectType';

export interface UserType {
	name: string;
	completName: string;
	description: string;
	profilePicture: string;
	experiences: ExperienceType[];
	formations: FormationType[];
	projects: ProjectType[];
	certificates: CertificatesType[];
	hardSkills: HardSkillsType[];
	gitHub: string;
	linkedin: string;
	instagram: string;
	phone: string;
	whatsapp: string;
	email: string;
}