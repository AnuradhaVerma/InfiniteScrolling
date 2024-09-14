# Virtual Scrolling (Infinite Scrolling)
# Project Overview

This project demonstrates a dynamic and responsive card layout using Angular, Angular Material, dynamic data loading, responsive design, custom styling,  and Angular CDK's virtual scrolling. The card layout adapts to various screen sizes and dynamically loads data as the user scrolls.

## Glimpses of UI design

 - Desktop View

  ![image](https://github.com/user-attachments/assets/0861cfb0-6d71-4dc5-aeaf-dbaf1eb6feaf)
  
  https://github.com/user-attachments/assets/3d3c530b-4079-46f9-8908-4af2984eef04


 - Mobile View
   ![image](https://github.com/user-attachments/assets/304834e7-6c74-4427-a390-e00ae621439a)

   https://github.com/user-attachments/assets/0ef6b9a2-69ad-41a3-a1dc-f07263991a5a



## Features

- **Virtual Scrolling**: Efficiently handle large datasets by dynamically loading and unloading items as the user scrolls.
- **Responsive Design**: Adapt the card layout to mobile, tablet, and desktop screens.
- **Custom Styling**: Enhanced visual appearance with hover effects and responsive images.
- **Dynamic Data Loading**: Simulate data fetching on scroll with seamless loading experience.
- **Performance Optimization**: Optimized for smooth scrolling and minimal re-rendering.

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your development machine.
- Angular CLI version@16 installed globally (`npm install -g @angular/cli`).
- Angular Material (`ng add @angular/material@16`).
- Angular CDK (`npm i @angular/cdk@16`).


### Installation Steps

1. **Clone the Repository**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start the Development Server**

    ```bash
    ng serve
    ```

    Navigate to `http://localhost:4200` in your browser to view the application.

## Code Structure

- **`app.component.ts`**: Contains the main component logic, including data fetching and virtual scrolling.
- **`app.component.html`**: Defines the template with virtual scrolling and card layout.
- **`app.component.css`**: Contains the styling for the grid layout and responsive design.
- **`data.service.ts`**: Service for fetching data from a local JSON file.
- **`app.module.ts`**: Main module that imports necessary Angular Material and CDK modules.
- **`data.json`** : It consists the data of songs.

## Components and Modules

### AppComponent

- **Template**: Uses Angular Material's `mat-card` and Angular CDK's `cdk-virtual-scroll-viewport` for displaying cards in a responsive grid.
- **Logic**: Manages data fetching, virtual scrolling, and dynamic loading.

### DataService

- **Service**: Provides data fetching functionality from a local JSON file using Angular's `HttpClient`.

### Modules

- **`ScrollingModule`**: Required for virtual scrolling.
- **`MatCardModule`**: Provides Material Design card components.
- **`MatProgressSpinnerModule`**: Provides Material Design spinner for loading indicators.
- **`HttpClientModule`**: Allows HTTP requests to fetch data.

## Styling

The application uses a responsive grid layout for cards:

- **CSS Grid Layout**: Utilizes `grid-template-columns` to create a flexible grid that adjusts based on screen size.
- **Responsive Breakpoints**:
  - **Mobile**: Single column layout.
  - **Tablet**: Multiple columns with adjusted card sizes.
  - **Desktop**: Larger grid with increased card sizes.

## Edge Cases and Performance Optimization

- **Slow Network Conditions**: Handles simulated data loading with a spinner to improve user experience.
- **Rapid Scrolling**: Efficiently loads and unloads items using virtual scrolling to maintain performance.
- **Re-rendering Issues**: Optimized for minimal re-rendering by leveraging Angular CDK's virtual scrolling features.

## Running Tests

To run unit tests for the application, use the following command:

```bash
ng test
