
//=====================Popup===========================//
  const popupButton = document.getElementById('popup-button');
    const popupForm = document.getElementById('popup-form');
    const closePopup = document.getElementById('close-popup');

    popupButton.addEventListener('click', function() {
        popupForm.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        popupForm.style.display = 'none';
    });

     document.getElementById("answer-button").addEventListener("click", callCHATGPT);

        async function callCHATGPT() {
            const responseText = document.getElementById("chatgpt-response");
            responseText.innerHTML = "SmgAi Loading the answer..."; // Display loading message


            const xhr = new XMLHttpRequest();
            let url = "https://chatgpt.apinepdev.workers.dev";
            const userQuestion = encodeURIComponent(document.getElementById("user-question").value);
            url += `?question=${userQuestion}`;
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    const answer = response.answer;

                    responseText.innerHTML = answer; // Display the answer

                    const styledResponse = document.getElementById("styled-response");
                    styledResponse.innerHTML = `
                        <div class="styled-response-box">
                            ${answer}
                        </div>
                    `;
                }
            };
            xhr.send();
        }

        document.getElementById("copy-btn").addEventListener("click", copyOutput);

        function copyOutput() {
            const output = document.getElementById("chatgpt-response");
            output.select();
            document.execCommand("copy");
        }



//==============UREFU WA COVER PAGE==================//
             // Function to update the height of the wewee div based on the content and empty space
function updateDivHeight() {
    var table = document.getElementById("reviewMemberTable");
    var tableRows = table.rows.length;
    var contentHeight = document.querySelector('.wewee').scrollHeight;
    var emptySpace = 590; // Initial empty space

    var totalHeight = contentHeight + emptySpace;

    // Set the height of the wewee div
    document.querySelector('.wewee').style.height = totalHeight + 'px';
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateDivHeight();

    // You may also need to call this function whenever the content or table rows change dynamically
});

//----------- MUIMU KWA COVER PAGE------------------//
   




document.querySelector('.conver').addEventListener('click', function() {
        this.style.backgroundColor = 'green';
        this.innerHTML = '<i class="fas fa-check"></i> Saved';
    });





$(document).ready(function() {
  var maxHeight = 350; // Maximum height in pixels
  var $container = $('#naitaji');
  var $buttons = $container.find('button');
  
  var totalHeight = 0;
  $buttons.each(function() {
    totalHeight += $(this).outerHeight(true); // Calculate total height including padding and margin
  });
  
  if (totalHeight > maxHeight) {
    $container.css('max-height', maxHeight + 'px');
    $container.css('overflow-y', 'auto');
  }
});


           




     // Undo and Redo Functionality
  var editorContent = document.getElementById('editorContent');
  var undoStack = [];
  var redoStack = [];

  function saveState() {
    undoStack.push(editorContent.innerHTML);
    redoStack = [];
  }

  function undoTextEditing() {
    if (undoStack.length > 1) {
      redoStack.push(undoStack.pop());
      editorContent.innerHTML = undoStack[undoStack.length - 1];
    }
  }

  function redoTextEditing() {
    if (redoStack.length > 0) {
      undoStack.push(redoStack.pop());
      editorContent.innerHTML = undoStack[undoStack.length - 1];
    }
  }

  editorContent.addEventListener('input', saveState);







    //------ font size style -------//
function applyFontStyle() {
    var selectedFont = document.getElementById("fontFamily").value;
    document.body.style.fontFamily = selectedFont + ', sans-serif';
}

function applyFontSize() {
    var selectedSize = document.getElementById("fontSize").value;
    document.body.style.fontSize = selectedSize + 'px';
}

function applyLineSpacing() {
    var selectedSpacing = document.getElementById("lineSpacing").value;
    document.body.style.lineHeight = selectedSpacing;
}



  function toggleNav() {
    var nav = document.getElementById("nav");
    var menuLeft = document.getElementById("menu-left");

    if (nav.style.display === "none") {
      nav.style.display = "block";
      menuLeft.innerHTML = "❌ FICHA EDIT";
    } else {
      nav.style.display = "none";
      menuLeft.innerHTML = "EDIT ❕";
    }
  }

  function toggleForm() {
    var form = document.getElementById("Assignment");
    var menuRight = document.getElementById("menu-right");

    if (form.style.display === "none") {
      form.style.display = "block";
      menuRight.innerHTML = "❌ FICHA TAARIFA";
    } else {
      form.style.display = "none";
      menuRight.innerHTML = "TAARIFA ❕";
    }
  }









// - - - - - - FUNCTIONALLY - - - - - - - //

function formatText(command, value = null) {
    var editorContent = document.getElementById('editorContent');
    var text = window.getSelection().toString();

    switch (command) {
        case 'bold':
            document.execCommand('bold', false, null);
            break;
        case 'italic':
            document.execCommand('italic', false, null);
            break;
        case 'underline':
            document.execCommand('underline', false, null);
            break;
        case 'strikethrough':
            document.execCommand('strikethrough', false, null);
            break;
        case 'subscript':
            document.execCommand('subscript', false, null);
            break;
        case 'superscript':
            document.execCommand('superscript', false, null);
            break;
        case 'highlight':
            var color = prompt('Enter highlight color:');
            document.execCommand('hiliteColor', false, color);
            break;
        case 'color':
            var color = prompt('Enter text color:');
            document.execCommand('foreColor', false, color);
            break;
        case 'uppercase':
            document.execCommand('insertText', false, text.toUpperCase());
            break;
        case 'lowercase':
            document.execCommand('insertText', false, text.toLowerCase());
            break;
        case 'clear':
            document.execCommand('removeFormat', false, null);
            break;
        case 'bullets':
            document.execCommand('insertUnorderedList', false, null);
            break;
        case 'numbering':
            document.execCommand('insertOrderedList', false, null);
            break;
        case 'indent':
            document.execCommand('indent', false, null);
            break;
        case 'outdent':
            document.execCommand('outdent', false, null);
            break;
        case 'alignleft':
            document.execCommand('justifyLeft', false, null);
            break;
        case 'aligncenter':
            document.execCommand('justifyCenter', false, null);
            break;
        case 'alignright':
            document.execCommand('justifyRight', false, null);
            break;
        case 'justify':
            document.execCommand('justifyFull', false, null);
            break;
        case 'fontFamily':
            document.execCommand('fontName', false, value);
            break;
        case 'fontSize':
            document.execCommand('fontSize', false, value);
            break;
        case 'lineSpacing':
            editorContent.style.lineHeight = value;
            break;
    }

    updatePreview();
}

//---------------MANENO YA PREVIEW KURUKA NAFASI-----//
//function updatePreview() {
 //   var preview = document.getElementById('preview');
 //   var editorContent = document.getElementById('editorContent');
//    preview.innerHTML = editorContent.innerHTML;
//}

// Adding event listener to update preview on input
//document.getElementById('editorContent').addEventListener('input', updatePreview);

//===========ENEOKWA KUWEKA KWA POR PAGE============//
function updatePreview() {
  var preview = document.getElementById('preview');
  var editorContent = document.getElementById('editorContent');
  var text = editorContent.innerHTML;
  var newText = "";
  var maxLength = 4270;
  for (var i = 0; i < text.length; i += maxLength) {
    newText += text.substring(i, i + maxLength) + "<br><br><br><br><br><br><br><br><br>";
  }
  preview.innerHTML = newText;
}

// Initial Update
updatePreview();

//---------------MANENO YA PREVIEW KURUKA NAFASI-----//





//------------------------------------------------------------//
//-----------------------assignment pdf-----------------------//
//------------------------------------------------------------//


$(document).ready(() => {
    $('#convertButton').on('click', () => {
        const element = document.getElementById('reviewAssignment');
        if (!element) return;

        html2pdf()
            .from(element)
            .set({
                margin: [5, 0.5, 30, 0.5], // top, right, bottom, left
            })
            .toPdf()
            .get('pdf')
            .then(function(pdf) {
                const totalPages = pdf.internal.getNumberOfPages();
                const footerHeight = 19; // Adjust footer height as needed
                const paragraphSpacing = 10; // Adjust paragraph spacing as needed
                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();

                // Loop through each page
                for (let i = 1; i <= totalPages; i++) {
                    pdf.setPage(i);
                    pdf.setFontSize(8);
                    pdf.setTextColor(100);
                    
                    // Add space before footer
                    pdf.text('', 0, pageHeight - footerHeight - paragraphSpacing);
                    
                    // Add footer text
                    pdf.text('Page ' + i + ' of ' + totalPages, pageWidth / 2, pageHeight - footerHeight, {
                        align: 'center'
                    });
                    
                    // Add space after footer
                    pdf.text('', 0, pageHeight - footerHeight * 2 - paragraphSpacing * 2);

                    // Convert image links to PDF
                    const imageElements = document.querySelectorAll('img');
                    let yPos = 40; // Initial Y position
                    imageElements.forEach((imgElement) => {
                        const imgSrc = imgElement.getAttribute('src');
                        if (imgSrc.startsWith('http') || imgSrc.startsWith('data:image')) {
                            const img = new Image();
                            img.onload = function() {
                                const imgWidth = img.width / 4; // Adjust image width
                                const imgHeight = img.height / 4; // Adjust image height
                                pdf.addImage(img, 'JPEG', 10, yPos, imgWidth, imgHeight); // Adjust position and size as needed
                                yPos += imgHeight + 10; // Update Y position for next image
                            };
                            img.src = imgSrc;
                        }
                    });
                }
            })
            .save('Assignment_@smg_office.pdf');
    });

    // Rest of your code...
});











        function addMember() {
            const memberName = document.getElementById("memberName").value;
            const registrationNumber = document.getElementById("registrationNumber").value;
            if (!memberName || !registrationNumber) {
                alert("Please fill in both the member name and registration number.");
                return;
            }

            const table = document.getElementById("memberTable");
            const row = table.insertRow(-1);
            row.insertCell(0).textContent = memberName;
            row.insertCell(1).textContent = registrationNumber;

            // Clear the input fields
            document.getElementById("memberName").value = "";
            document.getElementById("registrationNumber").value = "";
        }

        function reviewInformation() {
            // Retrieve values from the form
            const cause = $('#cause').val();
            const muda = $('#muda').val();
            const schoolName = $('#schoolName').val();
            const date = $('#date').val();
            const groupNumber = $('#groupNumber').val();
            const subjectCode = $('#subjectCode').val();
            const subjectName = $('#subjectName').val();
            const lectureName = $('#lectureName').val();
            const is = $('#is').val();
            const reference = $('#reference').val();

             // Update image based on selected school
     const imageSrc = getImageSrcForSchool(schoolName);
    $('#schoolImage').html(`<img src="${imageSrc}" alt="${schoolName} Image">`);
    

            // Display values in the review section
            $('#reviewCause').text(cause);
            $('#reviewMuda').text(muda);
            $('#reviewSchoolName').text(schoolName);
            $('#reviewDate').text(date);
            $('#reviewGroupNumber').text(groupNumber);
            $('#reviewSubjectCode').text(subjectCode);
            $('#reviewSubjectName').text(subjectName);
            $('#reviewLectureName').text(lectureName);
            $('#reviewIs').text(is);
            $('#reviewReference').text(reference);

          

       

            // Display values in the review section for the members table
            const reviewMembersTable = $('#reviewMemberTable');
            reviewMembersTable.empty(); // Clear the table

            const membersTable = $('#memberTable');
            const tableHeader = $('<thead><tr><th><b>Group Member</b></th><th><b>Registration Number</b></th></tr></thead>');
            reviewMembersTable.append(tableHeader);

            membersTable.find('tr:gt(0)').each(function() {
                const row = $('<tr></tr>');
                row.append(`<td>${$(this).find('td:eq(0)').text()}</td>`);
                row.append(`<td>${$(this).find('td:eq(1)').text()}</td>`);
                reviewMembersTable.append(row);
            });

            // Hide the form, show the review section
            $('#Assgignment').hide();
            $('#reviewAssignment').show();
        }


          



            function getImageSrcForSchool(schoolName) {
        switch (schoolName) {
            case 'TANZANIA INSTITUTE OF ACCOUNTANCY':
                return 'data:image/png;base64,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';
            case 'UNIVERSITY OF DODOMA':
                return 'data:image/png;base64,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';
            case 'UNIVERSITY OF DAR ES SALAAM':
                return 'data:image/png;base64,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';
            case 'DAR ES SALAAM UNIVERSTY COLLEGE OF EDUCATION':
                return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSko_fcE3PSotNd-RW9FxXAh39Or6t6dHo4XvHRW5ydrgf_ZcM3';
            case 'NATIONAL INSTITUTE OF TRANSPORT':
                return 'data:image/png;base64,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';
            case 'COLLEGE OF BUSINESS EDUCATION':
                return 'data:image/png;base64,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';
            default:
                return 'default_image.jpg'; // Default image if school not found
        }
    }

    // Call reviewInformation function on change of schoolName select
    $('#schoolName').change(reviewInformation);

    // Call reviewInformation function initially to populate review section
    reviewInformation();


          window.onload = function() {
    // Angalia ikiwa ukurasa umeingiwa moja kwa moja kutoka "home.page"
    if(document.referrer !== "https://enockofficial.github.io/SMG-OFFICE-2024/home_page.html") {
        // Ikiwa sio hivyo, rudisha mtumiaji kwenye "home.page"
        window.location.href = "https://enockofficial.github.io/T.I.A/php.html";
    }

