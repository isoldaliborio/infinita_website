
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

## ERD Diagram

The ERD diagram illustrates the database schema for the Infinita website, depicting the relationships between different entities such as projects, categories, services, and locations.

## Prototype Diagram

The prototype diagram showcases the layout and design of the Infinita website, including the placement of various elements such as navigation menus, project grids, service descriptions, and contact forms.

## Roadmap

**February:**
- Requirement gathering and analysis.
- Design prototyping.
- Initial setup of development environment.

**March:**
- Front-end development (HTML, CSS, JavaScript).
- Integration with WordPress CMS.
- Implementation of basic site functionality (Homepage, About, Contact).

**April:**
- Development of dynamic features (Projects, Services).
- Language localization implementation.
- Testing and debugging phase.

**May:**
- Final refinements based on feedback.
- Deployment to production environment.
- Client training for content management.
- Project handover and documentation.

## Tools and Libraries

1. **Typescript, JavaScript, PHP:** Primary programming languages for front-end and back-end development.
2. **SCSS:** Used for styling to enhance maintainability and reusability.
3. **React Native, NextJS:** Frameworks for building dynamic and responsive user interfaces.
4. **Tailwind CSS and shad/cn:** Libraries for UI component styling and optimization.
5. **SQL:** Database management system for storing and retrieving site data.
6. **WordPress CMS:** Content management system for easy content updates.
7. **GitLab:** Version control and project management tool for collaboration and issue tracking.

## Test

- Unit tests for individual components.
- Integration tests for end-to-end functionality.
- Cross-browser compatibility testing.
- Mobile responsiveness testing using inspector. 
- Localization testing for language support.
- Form validation testing.

## Limitations

1. **Content Update Frequency:** Reliance on client updates may result in delays in showcasing new projects.
2. **Performance Dependency:** Performance may vary based on the existing server infrastructure.
3. **Localization Constraints:** Limited language support beyond Portuguese and English.
4. **Security Risks:** Vulnerabilities associated with WordPress plugins and third-party integrations.

