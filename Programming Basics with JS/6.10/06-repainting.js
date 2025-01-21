function repainting(necessaryPolyester, necessaryPaint, mixer, time)
{
    let polyesterPrice = (necessaryPolyester + 2) * 1.50; //18

    let percentPaint = necessaryPaint * 0.1;
    let paintPrice = (necessaryPaint + percentPaint) * 14.50; //    175.45

    let mixerPrice = mixer * 5; // 20

    let sumBags = 0.40;
    let totalPriceMaterials = polyesterPrice + paintPrice + mixerPrice + sumBags; // 213.85

    let paycheck = totalPriceMaterials * ( 30 / 100); // suma za maistori na chas 

    let totalPriceMaistor = paycheck * time; // suma za maistori obshto  513.24
    let finalPrice = totalPriceMaistor + totalPriceMaterials; // 727.09
    console.log(finalPrice); 
}

repainting(10, 11, 4, 8);
repainting(5, 10, 10, 1);