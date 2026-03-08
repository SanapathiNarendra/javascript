
        function onClickConvert() {
            debugger;
            var celsius =parseInt(document.getElementById("txtCelsius").value);
            var fahrenheit = (celsius * 9 / 5) + 32;
            document.getElementById("pResult").innerHTML = fahrenheit;
        }
  