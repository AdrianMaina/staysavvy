# StaySavvy - Hotel Review Platform

## Project Pitch

StaySavvy is a single-page web application designed to provide travelers with a simple, reliable, and visually pleasant way to discover hotels and read trustworthy, personalized reviews.

## 1. Problem Statement

Finding trustworthy and personalized hotel reviews can be a frustrating experience for travelers. Mainstream platforms are often cluttered with:

* **Excessive Advertising:** Distracting users and hindering their search for genuine information.
* **Irrelevant Information:** Making it difficult to sift through noise and find details that matter.
* **Fake or Biased Reviews:** Eroding user trust and leading to potentially poor booking decisions.

This highlights a clear need for a platform that prioritizes simplicity, reliability, and a clean user experience for browsing hotels and accessing authentic reviews.

## 2. Solution

StaySavvy addresses this problem by offering a focused and intuitive platform where users can:

* **Discover Hotels Easily:** Browse a curated list of hotels with essential information.
* **Read Real User Reviews:** Access genuine feedback from other travelers to make informed decisions.
* **Share Their Experiences:** Contribute to the community by submitting their own hotel reviews through a straightforward form.

The application features a clean and elegant user interface, making the process of finding and reviewing hotels seamless and enjoyable.

## 3. Minimum Viable Product (MVP)

The initial version of StaySavvy will include the following core features:

* **Hotel Directory:**
    * Displays a list of hotels.
    * Presents key details for each hotel: name, location, image, and average rating.
    * Hotel data will be fetched from a `json-server` backend.
* **Review Submission:**
    * Allows users to submit reviews for specific hotels.
    * Features a controlled form for review input.
    * Submitted reviews will be sent to the `json-server` backend using a POST request.
* **Search Functionality:**
    * Enables users to dynamically filter the hotel list.
    * Filtering will be based on hotel name or location.
* **Component Structure:**
    * The frontend will be built using a modular component-based architecture, including at least the following components:
        * `HotelList`: Displays the list of hotel cards.
        * `HotelCard`: Represents an individual hotel with its details.
        * `ReviewForm`: Allows users to submit new reviews.
        * `NavBar`: Provides navigation elements (if needed).
        * `HotelDetail`: Displays detailed information for a selected hotel.
* **User Interface:**
    * Responsive design to ensure usability across different devices.
    * Elegant and clean aesthetics achieved through Tailwind CSS.
* **State Management:**
    * Upon successful review submission, the application's state will be immediately updated using `setState` (or a similar mechanism in the chosen framework/library).
    * The hotel list will re-render dynamically to reflect the newly added review.
* **Backend Setup:**
    * `json-server` will be utilized as a simple backend to serve hotel and review data.
    * Implements GET endpoints to retrieve hotel and review information.
    * Implements a POST endpoint to handle the submission of new reviews.
* **Google Maps Iframe:**
    * An embedded Google Maps iframe will be integrated to display the geographical location of each hotel.

## 4. Links

* **GitHub:** [https://github.com/AdrianMaina/staysavvy](https://github.com/AdrianMaina/staysavvy)

## 5.Liscence
* [Liscence](Liscence)
