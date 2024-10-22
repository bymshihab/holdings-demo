// Sample data with images and details
const properties = [
  {
    type: "Residential",
    status: "Ongoing",
    image: "../images/homeTopSlide/Ongoing,Mohammadpur.jpg",
    details: "Construction of 16-storied building at Mohammadpur, Dhaka.",
  },
  {
    type: "Residential",
    status: "Completed",
    image: "../images/homeTopSlide/apartment_lalmatia.png",
    details:
      "Construction of 14-storied residential apartment building at Lalmatia, Dhaka.",
  },
  {
    type: "Residential",
    status: "Ongoing",
    image: "../images/homeTopSlide/FourthBuilding.png",
    details: "A newly constructed residential building, ready for move-in.",
  },
  {
    type: "Commercial",
    status: "Completed",
    image: "../images/homeTopSlide/fareast_insurance_tower.png",
    details:
      "	20-Storied Plus 3 Level Basement of Commercial Building frame structure with mat foundation.",
  },
  {
    type: "Commercial",
    status: "Completed", // Changed from 'Upcoming' to 'Upcoming'
    image: "../images/homeTopSlide/DeltaTower.jpg",
    details:
      "	19-Storied building.  2 basemens. Mat Foundation of works.Total floor area of about 15,196 m2(Per floor area 976 m2)",
  },
  {
    type: "Commercial",
    status: "Completed", // Changed from 'Upcoming' to 'Upcoming'
    image: "../images/homeTopSlide/WaterModel.jpg",
    details: "Construction of 09 Storied (7 Storied+ 2 Basement) Building.",
  },
  {
    type: "Residential",
    status: "Completed",
    image: "../images/homeTopSlide/FourthBuilding.png",
    details: "A completed residential building with modern amenities.",
  },
];
// Wait for 3 seconds before applying the zoom effect
setInterval(function () {
  var img = document.getElementById("navImg");

  // Decrease opacity gradually
  // img.style.transition = 'opacity 3s ease';
  // img.style.opacity = '0.7';

  // After 2 seconds, increase opacity gradually
  setTimeout(function () {
    // img.style.opacity = '1';
  }, 2000);
}, 3000);

// Function to get query parameters from the URL
function getQueryParams() {
  const params = {};
  const queryString = window.location.search.substring(1); // Remove '?'
  const paramPairs = queryString.split("&"); // Split on '&'

  paramPairs.forEach((pair) => {
    const [key, value] = pair.split("="); // Extract key and value
    params[key] = value; // Decode URL-encoded values
  });

  return params;
}

function setDropdownValues() {
  const params = getQueryParams();

  const typeSelect = document.getElementById("type-select");
  const statusSelect = document.getElementById("status-select");

  if (params["type"]) {
    typeSelect.value = params["type"]; // Set type value based on parameters
  }

  if (params["status"]) {
    statusSelect.value = params["status"]; // Set status value based on parameters
  }
}

function updatePropertyDisplay() {
  const typeSelect = document.getElementById("type-select");
  const statusSelect = document.getElementById("status-select");
  const propertyDisplay = document.getElementById("property-display");
  const imgElement = document.querySelector("#navImg");

  const selectedType = typeSelect.value;
  const selectedStatus = statusSelect.value;
  if (selectedType === "Residential") {
    // Select the img element

    // Set the image source
    imgElement.style.zIndex = "-1000";

    imgElement.src = "../images/homeTopSlide/Residential.jpg";
    imgElement.style.position = "relative";
  } else {
    imgElement.src = "../images/homeTopSlide/WaterModel.jpg";
    imgElement.style.zIndex = "-1000";
    imgElement.style.position = "relative";
  }

  const matchingProperties = properties.filter(
    (prop) =>
      (selectedType === "" || prop.type === selectedType) &&
      (selectedStatus === "" || prop.status === selectedStatus)
  );

  if (matchingProperties.length > 0) {
    console.log(matchingProperties, "match");
    propertyDisplay.innerHTML = matchingProperties.map(
      (property) =>
        `
                <div class="property ">
                <a href="../specification/specification.html">
                   <img src="${property.image}" alt="${property.details}" height="100%" width="100%">
                   <button class="property-btn">View Details</button>
                </a>
                </div>`
    ).join("");

    document.querySelectorAll(".property").forEach((propertyDiv) => {
        const propertyBtn = propertyDiv.querySelector(".property-btn");
        propertyBtn.style.visibility = "hidden";
        propertyDiv.addEventListener("mouseover", function () {
          propertyBtn.style.visibility = "visible";
        });
        propertyDiv.addEventListener("mouseout", function () {
          propertyBtn.style.visibility = "hidden";
        });
      });
    } else {
      propertyDisplay.innerHTML = "<p>No matching properties found.</p>";
    }
}


// Initialize dropdowns and update the property display when the page loads
document.addEventListener("DOMContentLoaded", function () {
    
  setDropdownValues(); // Set the dropdowns based on query parameters
  updatePropertyDisplay(); // Update the display based on dropdown values

  // Add event listeners to dropdowns to update property display on change
  const typeSelect = document.getElementById("type-select");
  const statusSelect = document.getElementById("status-select");

  typeSelect.addEventListener("change", updatePropertyDisplay);
  statusSelect.addEventListener("change", updatePropertyDisplay);
  
});
