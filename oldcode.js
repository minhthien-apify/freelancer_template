      // const formFrame = document.getElementById(
      //   "cost-estimate-and-order-form-jgsebk",
      // );
      // window.addEventListener("message", (event) => {
      //   if (
      //     event.source !== formFrame.contentWindow ||
      //     event.origin !== "https://opnform.com" ||
      //     event.data?.type !== "form-submitted"
      //   ) {
      //     return;
      //   }

      //   console.log("Submission detected from form slug:", event.data.form?.slug);
      //   console.log("Submission data:", event.data.submission_data);
      // });


    //     <!-- <script>
    //   opnform.on("submit", function (data) {
    //     console.log("Form submitted:", data);
    //   });

    //   opnform.on("pageChange", (event) => {
    //     const floatingElement = document.getElementById(
    //       "dynamic-floating-item",
    //     );
    //     console.log("detected page cahnge");

    //     if (event.currentPage === 1) {
    //       floatingElement.textContent = "Page 1: Filling out basics...";
    //     } else if (event.currentPage === 2) {
    //       floatingElement.textContent = "Almost done! Page 2...";
    //     }
    //   });
    // </script> -->




    
          // set the iframe to get content but can not bypass the iframe cors

          // // 1. Get the iframe element from the parent page
          // const iframe = document.getElementById(formSlug);

          // // 2. Access the document context inside the iframe
          // const iframeDocument =
          //   iframe.contentDocument || iframe.contentWindow.document;

          // // 3. Get the specific element inside the iframe by its ID
          // const targetElement =
          //   iframeDocument.getElementById("b239a456-abc4-44d7-af2c-b8f00ce9922f");

          // // Example usage: Modify the element
          // // if (targetElement) {
          // //   targetElement.style.color = "red";
          // // }

          // form.setField(approvalFieldId, "Aproved: " + targetElement.textContent);




          
        // const order = Number(form.getField(orderFieldId)) || 0;
        // const quantity = Number(form.getField(quantityFieldId)) || 0;

        // console.log("hoho ",form.getField(total1Id)," huhu ",form.getField(total2Id))

        // const total1Cost = Number(form.getField(total1Id)) || 0;
        // const total2Cost = Number(form.getField(total2Id)) || 0;
        // if (total1Cost == 0 || total2Cost == 0) {
        //   console.log("Form still not complete");
        //   console.log("hihi ",total1Cost," haha ",total2Cost)
        //   console.log("hoho ",form.getField(total1Id)," huhu ",form.getField(total2Id))
        //   return;
        // } else {
        //   floatingElement.textContent = `Estimated total: ${currencyFormatter.format(
        //     total1Cost + total2Cost ,
        //   )}`;
        // }