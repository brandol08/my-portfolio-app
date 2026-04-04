export class ContactComponent {
  name: string;
  title: string;
  bio: string;
  socialLinks: { github: string; linkedin: string; twitter: string };
  technicalSkills: string[];
  workExperience: string[];
  education: string;
  contactInfo: { email: string; phone: string };

  constructor() {
    this.name = 'Marlon Alejo Arias';
    this.title = 'Lic. Tecnología de la Información';
    this.bio = 'Programador frontend con Angular.';
    this.socialLinks = {
      github: 'https://github.com/alejoariasmarlon80',
      linkedin: 'https://www.linkedin.com/in/alejoariasmarlon80',
      twitter: 'https://twitter.com/alejoariasmarlon80'
    };
    this.technicalSkills = ['Angular', 'Frontend Development'];
    this.workExperience = ['Project 1', 'Project 2'];
    this.education = 'Universidad XYZ';
    this.contactInfo = {
      email: 'alejoariasmarlon80@example.com',
      phone: '123-456-7890'
    };
  }
}