document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".btn");
    let input = document.getElementById("display");
    let string = "";

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') {
                try {
                    input.value = eval(string);
                } catch (error) {
                    input.value = "Error";
                }
            } else if (e.target.innerHTML == 'C') {
                string = "";
                input.value = string;
            } else if (e.target.innerHTML == 'DEL') {
                string = string.slice(0, -1);
                input.value = string;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        });
    });
});

/* another script 

            let input = document.getElementById("display");
            let string = "";

            document.querySelectorAll(".btn").forEach(button => {
                button.addEventListener('click', () => {
                    const buttonText = button.innerHTML;

                    switch (buttonText) {
                        case '=':
                            try {
                                input.value = eval(string);
                            } catch (error) {
                                input.value = "Error";
                            }
                            string = "";
                            break;
                        case 'C':
                            string = "";
                            input.value = string;
                            break;
                        case 'DEL':
                            string = string.slice(0, -1);
                            input.value = string;
                            break;
                        default:
                            string += buttonText;
                            input.value = string;
                    }
                });
            });
       l
    </script> 
     */