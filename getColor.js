const tempColorObj = {
    '1': 'rgb(164, 33, 21)', // red
    '0': 'rgb(255, 255, 255)', // white
    '-1': 'rgb(48, 111, 174)' // blue
}

// https://stackoverflow.com/a/23202637
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// https://stackoverflow.com/a/24253254
function getColorGradientValue(p, rgb_beginning, rgb_end){
    var w = p * 2 - 1;

    var w1 = (w + 1) / 2.0;
    var w2 = 1 - w1;

    var rgb = {
        r: parseInt(rgb_beginning[0] * w1 + rgb_end[0] * w2),
        g: parseInt(rgb_beginning[1] * w1 + rgb_end[1] * w2),
        b: parseInt(rgb_beginning[2] * w1 + rgb_end[2] * w2)
    };
    return rgb;
};

function rgbValToArray(rgbString) {
    return rgbString.replace('rgb(', '').replace(')', '').split(', ')
}

// https://stackoverflow.com/a/5624139
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
// https://stackoverflow.com/a/11868159
function colorLightOrDark(R, G, B) {
    // https://stackoverflow.com/a/4726403
    // var nThreshold = 105;
    // var bgDelta = (R * 0.299) + (G * 0.587) + (B * 0.114);
    // return ((255 - bgDelta) < nThreshold) ? "#000000" : "#ffffff"; 

    // http://www.w3.org/TR/AERT#color-contrast
    const brightness = Math.round((
        (parseInt(R) * 299) +
        (parseInt(G) * 587) +
        (parseInt(B) * 114)) / 1000);
    const textColour = (brightness > 125) ? 'black' : 'white';
    return textColour;
}

function returnFullColorArray() {
    var objToReturn = {};

    var red = rgbValToArray(tempColorObj[1]);
    var white = rgbValToArray(tempColorObj[0]);
    var blue = rgbValToArray(tempColorObj[-1]);
    for (var i = 0; i <= 100; i++) {
        if (i < 50) {
            var { r, g, b } = getColorGradientValue(scale(i, 0, 50, 0, 100)/100, red, white);
            objToReturn[i] = `rgb(${r}, ${g}, ${b})`;
        } else if (i >= 50) {
            objToReturn[i] = tempColorObj[1];
        }
        //console.log(`%c${i/100}`, `color: rgb(${r}, ${g}, ${b})`);
    }
    for (var i = -100; i <= 0; i++) {
        if (i >= -50) {
            var { r, g, b } = getColorGradientValue(Math.abs(scale(i, 0, 50, 0, 100)/100), blue, white);
            objToReturn[i] = `rgb(${r}, ${g}, ${b})`;
        } else if (i < -50) {
            objToReturn[i] = tempColorObj[-1];
        }
        //console.log(`%c${i/100}`, `color: rgb(${r}, ${g}, ${b})`);
    }

    return objToReturn;
}

function getColor(tempVal) {
    tempVal = tempVal * 100;
    tempVal = parseInt(tempVal);
    var allColors = returnFullColorArray();

    return allColors[tempVal];
}