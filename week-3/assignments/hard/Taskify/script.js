document.addEventListener("DOMContentLoaded", () => {
  // --- DRAG AND DROP LOGIC ---

  let draggedCard = null;

  function handleDragStart(event) {
    draggedCard = event.target;
    // Add a 'dragging' class to give visual feedback
    setTimeout(() => {
      event.target.classList.add("dragging");
    }, 0);
  }

  function handleDragEnd(event) {
    // Remove the 'dragging' class when the drag ends
    event.target.classList.remove("dragging");
    draggedCard = null;
  }

  function handleDragOver(event) {
    // Prevent the default behavior to allow dropping
    event.preventDefault();
    const dropZone = event.currentTarget;
    dropZone.classList.add("drag-over");
  }

  function handleDragLeave(event) {
    event.currentTarget.classList.remove("drag-over");
  }

  function handleDrop(event) {
    event.preventDefault();
    const dropZone = event.currentTarget;
    dropZone.classList.remove("drag-over");

    // Append the dragged card to the new column's task container
    if (draggedCard) {
      dropZone.appendChild(draggedCard);
    }
  }

  // Function to make a card draggable
  function makeCardDraggable(card) {
    card.addEventListener("dragstart", handleDragStart);
    card.addEventListener("dragend", handleDragEnd);
  }

  // Attach drag-and-drop listeners to columns and initial cards
  const dropZones = document.querySelectorAll(".tasks-container");
  dropZones.forEach((zone) => {
    zone.addEventListener("dragover", handleDragOver);
    zone.addEventListener("dragleave", handleDragLeave);
    zone.addEventListener("drop", handleDrop);
  });

  const initialCards = document.querySelectorAll(".task-card");
  initialCards.forEach((card) => {
    makeCardDraggable(card);
  });

  // --- MODAL AND FORM LOGIC ---

  const modalOverlay = document.getElementById("add-task-modal");
  const addTaskForm = document.getElementById("add-task-form");
  const closeModalBtn = document.getElementById("close-modal-btn");
  let targetColumnId = null;

  // Open modal when any "Add new" button is clicked
  document.querySelectorAll(".add-new-btn").forEach((button) => {
    button.addEventListener("click", () => {
      targetColumnId = button.dataset.columnId;
      modalOverlay.classList.add("visible");
    });
  });

  // Close modal function
  function closeModal() {
    modalOverlay.classList.remove("visible");
    addTaskForm.reset();
    targetColumnId = null;
  }

  closeModalBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (event) => {
    // Close if clicked outside the modal content
    if (event.target === modalOverlay) {
      closeModal();
    }
  });

  // Handle form submission to create a new task
  addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-desc").value;
    const priority = document.getElementById("task-priority").value;

    if (!title.trim() || !targetColumnId) return;

    // Create the new task card element
    const newCard = document.createElement("div");
    newCard.className = "task-card";
    newCard.setAttribute("draggable", "true");

    const today = new Date();
    const dateString = today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    newCard.innerHTML = `
            <h4>${title}</h4>
            <p>${description}</p>
            <div class="task-footer">
                <span class="task-priority ${priority}">${priority}</span>
                <span class="task-date">${dateString}</span>
            </div>
        `;

    // Make the new card draggable
    makeCardDraggable(newCard);

    // Append the new card to the correct column
    const targetColumn = document.querySelector(
      `.tasks-container[data-column-id="${targetColumnId}"]`
    );
    if (targetColumn) {
      targetColumn.appendChild(newCard);
    }

    // Close the modal and reset the form
    closeModal();
  });
});
