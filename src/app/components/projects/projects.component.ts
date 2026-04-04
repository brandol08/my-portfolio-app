export class ProjectsComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://github.com/example/project1'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://github.com/example/project2'
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      link: 'https://github.com/example/project3'
    }
  ];

  constructor() {}

  getProjects() {
    return this.projects;
  }
}