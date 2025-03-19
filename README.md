## Getting Started

To install all dependencies, run the following command:

```bash
npm install
```

Once all dependencies have been successfully installed, the development server can now be started:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the application by modifying the files. The page auto-updates as you edit the files.

## Solution and architectural decisions

This application represents a small smart storage system inspired by the DENTYTHING from Komet Dental. The individual compartments are used to organize dental products that can be taken by medical personnel.

The overview page is the homepage of the application. Each card on the overview page represents an individual compartment, where the name, quantity, and individual products are displayed as boxes. The user has the ability to take products from the individual compartments. The current quantity is then saved accordingly. In the lower area of the overview page, the user gets an overview of the total number of available products and the occupied compartments (statusbar). Through the header, which is located at the top of the application and is displayed on all pages, the user has the ability to navigate to other pages. In addition to the overview page, there is also the settings page, which currently has no relevant functions.

The architecture is inspired by the requirements of the application. Separate pages and paths have been created for both the overview page and the settings page to separate the functionalities. This Next.js application uses the Page Routes, which results in the routes being based on the file system. Accordingly, the URLs are structured in this way:

```
app
├── overview
│   └── api
│        └── compartments
│                └── id[]
└── settings
```

The following URLs and APIs are the result based on this structure:
<br/>
".../overview"
<br/>
".../overview/api/compartments" --> GET-API
<br/>
".../overview/api/compartments/[id]" --> PUT-API
<br/>
".../settings"

The RootPage performs a redirect to the overview page, as there is currently no landing page. The RootLayout defines the design for all pages. For this reason, the header was placed in the RootLayout to ensure it is displayed on all subsequent pages. A separate page (`ui/header.tsx`) was created for the header itself to keep the code more organized.

The overview page displays the compartments as cards, which have also been outsourced into their own page (`ui/compartment.tsx`). The data of the compartments is retrieved via a REST API (GET), which is defined in the route.ts under `api/compartments`. Next.js automatically reads the interface and provide it on the server. The Compartment component consists of a title, a display of the available quantity of products, a scrollable window with boxes for each available product, an input field (number), and a button. A form ensures that a number is entered in the input field and that the current number is updated in the form state. The form values are passed to the update function when the button is clicked, so that the data can be saved via the PUT-API. The interface can be found under `api/compartments/[id]`. As indicated by the path, an ID of the compartment must be provided as a parameter in order to update the values. The test data retrieved from the interfaces comes from `compartment-data.ts` and provides an in-memory solution, which is sufficient for testing purposes. At the bottom of the overview page is the status bar, which has also been outsourced into its own page (`ui/statusbar.tsx`). The displayed values are calculated from the retrieved test data and update automatically after changes.

The assets (images, etc.) and the E2E test have been outsourced into separate folders outside the app scope.

## Running Tests (Playwright)

The test is an E2E test and tests the retrieval and correct display of the available products. Playwright is used as the testing framework. The test can be started with the following command:

```bash
npm run test
```

The results can be viewed in the browser. The following command must be executed:

```bash
npm run report
```

The test can be accessed at the following URL: http://localhost:9323