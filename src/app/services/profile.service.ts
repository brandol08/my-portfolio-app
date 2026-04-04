export class ProfileService {
    private profileData = {
        fullName: 'Marlon Alejo Arias',
        title: 'Lic. Tecnología de la Información',
        bio: 'Programador frontend con Angular. Apasionado por la tecnología y el desarrollo de aplicaciones web.',
        socialLinks: {
            github: 'https://github.com/alejoariasmarlon80',
            linkedin: 'https://www.linkedin.com/in/alejoariasmarlon80',
            twitter: 'https://twitter.com/alejoariasmarlon80'
        },
        skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
        experience: 'Desarrollador frontend en varios proyectos, incluyendo aplicaciones web y servicios API.',
        education: 'Licenciatura en Tecnología de la Información',
        contact: {
            email: 'alejoariasmarlon80@example.com',
            phone: '123-456-7890'
        }
    };

    getProfileData() {
        return this.profileData;
    }
}