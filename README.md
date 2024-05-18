
# Infinita Website Documentation

## Background

Infinita Website serves as a portfolio platform for a company deeply involved in the cinema industry. The site showcases the company's varied services, including production, curation, music, and accounting. The primary aim is to exhibit the projects the company has undertaken, attracting potential clients and partners.

## Functional Requirements

1. **Homepage:**
   - Display a carousel featuring four images of the main projects.
   - Showcase the best projects to grab immediate attention.

2. **About Page:**
   - Provide a brief company overview.
   - Include an accordion menu with categories (accounting, curation, music, production).
   - Explain each service under respective categories.

3. **Projects Page:**
   - Exhibit a grid of project images sorted by year.
   - Implement category filters.
   - Link each image to its corresponding project page.

4. **Individual Project Page:**
   - Showcase project poster, description, and video link (if available).
   - Display a gallery of project images (if available).

5. **Services Page:**
   - Detail company services.
   - Utilize an accordion menu to display service locations (Brazil, UK, Europe) with brief descriptions.

6. **Contact Page:**
   - Integrate a contact form for direct communication.
   - Include social media icons in the footer for easy access.

7. **Bilingual Support:**
   - Enable language selection (Portuguese and English) via language buttons (PT/EN).

## Non-functional Requirements

1. **Resilience:**
   - Ensure the site is easily updatable by the client to add new projects.
   - Utilize a CMS (WordPress) for content management.

2. **User Experience:**
   - Provide an intuitive interface with easy navigation.
   - Implement a responsive design for optimal viewing across devices.

3. **Performance:**
   - Optimize image galleries for fast loading times.
   - Minimize server response time by leveraging existing infrastructure.

## Architecture Diagram

![Architecture Diagram](documentation/architecture_diagram_infinita.png)

## Tools and Libraries

1. **Typescript, JavaScript, PHP:** Primary programming languages for front-end and back-end development.
2. **SASS, Tailwind:** Used for styling to enhance maintainability and reusability of CSS code.
3. **React, NextJS:** Frameworks for building dynamic and responsive user interfaces.
4. **shad/cn:** Libraries for UI component styling and optimization.
5. **MySQL:** Database management system for storing and retrieving site data.
6. **WordPress:** Content management system for easy content updates.
7. **GitHub:** Version control and project management tool for collaboration and issue tracking.

## Project Team

### Isolda Liborio
- **Role**: Full Stack Developer and Project Manager
- **GitHub**: [Isolda Liborio](https://github.com/isoldaliborio/)

### Noah Aldhous
- **Role**: Full Stack Developer
- **GitHub**: [NoahAldhous](https://github.com/NoahAldhous)

### Eduardo Di Nardo
- **Role**: Developer Chief
- **GitHub**: [Eduardo Di Nardo](https://github.com/eduardo-haddad)

### Mariana Neri
- **Role**: Designer
- **GitHub**: *([Mariana Neri](https://www.mariananeri.com/))*


## Management

**Agile Methodology:**
- We adopted Agile methodologies for efficient task management, fostering adaptability and collaboration. By breaking tasks into smaller iterations, known as epics and issues, we ensured flexibility in responding to changes and delivering value incrementally.

**Jira Integration:**
- We leveraged Jira as our primary project management tool, facilitating the tracking of tasks, user stories, and sprints. With Jira, we organized our workflow seamlessly, allowing us to visualize progress, manage priorities, and enhance communication within the team.


## Limitations

1. **Content Update Frequency:** Reliance on client updates may result in delays in showcasing new projects.
2. **Performance Dependency:** Performance may vary based on the existing server infrastructure.
3. **Localization Constraints:** Limited language support beyond Portuguese and English.
4. **Security Risks:** Vulnerabilities associated with WordPress plugins and third-party integrations.
