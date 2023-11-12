    // Where is Waldo //
    const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];

    whereIsWaldo.splice(1,1);
    
    console.log(whereIsWaldo);

    whereIsWaldo[1][2] = "No One";

    console.log(whereIsWaldo);