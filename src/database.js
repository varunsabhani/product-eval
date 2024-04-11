 export let products = [
    
    {
       productName : "Harvest brown bread",
       type : "brown bread",
       ingredients : "Whole Wheat Flour (Atta) (32.7%), Refined Wheat Flour (Maida) (27.3%), Yeast, Sugar, Gluten, Wheat Bran, lodized Salt, Edible Vegetable Oil (Refined Palmolein Oil). Preservatives (282,200), Emulsifier (472e), Acidity Regulators (341(1), 270, 297), Flour Treatment Agents (1100, 1104 & 1102), Antioxidant (300)" ,
       healthScore : 9
   },
    {
       productName : "Britannia brown bread",
       type : "brown bread",
       ingredients : "WHEAT FLOUR (ATTA) (32%), REFINED WHEAT FLOUR (MAIDA), YEAST, SUGAR, VITAL GLUTEN, IODISED SALT, REFINED PALMOLEIN, PRESERVATIVE (282), EMULSIFIER (472e), IMPROVER [1100(i)), ACIDITY REGULATOR (260), VITAMINS* AND FLOUR TREATMENT AGENT (510). CONTAINS PERMITTED NATURAL FOOD COLOUR (150a)", 
       healthScore : 10
   },
    {
       productName : "Harvest Multigrain",
       type : "multigrain bread",
       ingredients :"Refined Wheat Flour (Maida), Whole Wheat Flour (Atta), Grains* and Seeds Mix (Flax Seeds, Rolled Oats, Oat Flour, Maize Flour, Pumpkin Seeds, Bengal Gram Flour, Rice Flour, Barley Flour, White Sesame Seeds, Bajra, Sorghum), Sugar, Gluten, Yeast, Edible Vegetable Oil (Refined Palmolein Oil), lodized Salt, Soya Flour, Preservatives (282, 200), Wheat Bran, Emulsifier (471), Acidity Regulators (270, 297), Flour Treatment Agents (1100, 1102, 1104, 510), Antioxidant (300)", 
       healthScore : 9.8
   },
    {
       productName : "Britannia Multigrain",
       type : "multigrain bread",
       ingredients : "WHEAT PRODUCTS (54%) [WHEAT FLOUR (ATTA), WHEAT BRAN & BROKEN WHEAT], OIL SEEDS - 5% (LINSEED, SESAME, SUNFLOWER AND WATER-MELON), YEAST, RAGI FLOUR (2%), ROLLED OATS (2%), VITAL GLUTEN, SUGAR, SOYA FLAKES (1.2%), IODISED SALT, REFINED PALMOLEIN OIL, PRESERVATIVE (282), EMULSIFIERS [472e, 471, 481(i)), ACIDITY REGULATOR (260) AND FLOUR TREATMENT AGENT (510).	",
       healthScore : 9.7
   },
    {
       productName : "Harvest wheat Bread",
       type : "wheat bread",
       ingredients : "Whole Wheat Flour (Atta) (54%), Sugar, Yeast, Gluten, lodized Salt, Wheat Bran, Preservatives (282, 200), Edible Vegetable Oil (Refined Soybean Oil, Refined Palmolein Oil), Soya Flour, Emulsifiers (481(i), 472e), Acidity Regulators (270, 297), Flour Treatment Agents (1104 & 1100), Antioxidant (300)	",
       healthScore : 8.9
   },
    {
       productName : "Britannia wheat Bread",
       type : "wheat bread",
       ingredients : "WHEAT FLOUR (ATTA) (62%), WATER, YEAST, WHEAT BRAN, VITAL GLUTEN, SUGAR, IODISED SALT, REFINED PALMOLEIN OIL, COLOUR (150a), PRESERVATIVE (282), IMPROVERS [1100(1), 1104, 1102 & XYLANASE), EMULSIFIERS [471, 481 (i), 472e), ACIDITY REGULATOR (260) AND FLOUR TREATMENT AGENT (510)",
       healthScore : 8.7
   },
    {
       productName : "Harvest white Bread",
       type : "white bread",
       ingredients: "Refined Wheat Flour (Maida), sugar, Yeast, lodized Salt, Gluten, Preservatives (282,200), Soya Flour, Edible Vegetable Oil (Refined Soybean Oil, Refined Palmolein Oil), Emulsifiers (481 (1), 472e), Acidity Regulators (270, 297), Stabilizer (415), Flour Treatment Agents (1104 & 11:00), Antioxidant (300)	",
       healthScore : 8.6
   },
    {
       productName : "Britannia white Bread",
       type : "wwhite bread",
       ingredients : "REFINED WHEAT FLOUR (MAIDA), SUGAR, YEAST, IODISED SALT, REFINED PALM OIL, SOYA FLOUR, VITAL GLUTEN, PRESERVATIVE (282), FLOUR TREATMENT AGENT (516 & 510), EMULSIFIER (472e), STABILIZER [170(i), 412], ACIDITY REGULATOR (260), VITAMINS, IMPROVERS [1101(1), 1102, 1104] AND ANTIOXIDANT (300).",
       healthScore : 8.5
   },
        {
        productName : "Harvest aata Bread",
        type : "atta bread",
        ingredients : "REFINED WHEAT FLOUR (MAIDA), SUGAR, YEAST, IODISED SALT, REFINED PALM OIL, SOYA FLOUR, VITAL GLUTEN, PRESERVATIVE (282), FLOUR TREATMENT AGENT (516 & 510), EMULSIFIER (472e), STABILIZER [170(i), 412], ACIDITY REGULATOR (260), VITAMINS, IMPROVERS [1101(1), 1102, 1104] AND ANTIOXIDANT (300).",
        healthScore : 9.2
    },
        {
        productName : "Britannia aata Bread",
        type : "atta bread",
        ingredients : " FLOURS [WHEAT FLOUR(ATTA) (38%), REFINED WHEAT FLOUR(MAIDA)], WATER, YEAST, SUGAR, VITAL GLUTEN, IODISED SALT, REFINED PALMOLEIN OIL, COLOUR (150a), PRESERVATIVE (282), EMULSIFIER (472e), IM- PROVER [1100(i)], ACIDITY REGULATOR (260), FLOUR TREATMENT AGENT (510) , VITAMINS	",
        healthScore : 9.1
    },
    
    
    {
       productName : "Dr. Oetker",
       type : "peanut butter",
       ingredients :"Roasted Peanuts 91%, Sugar, Edible Vegetable Fat (Soyabean), Iodised Salt, Contains Nut", 
       healthScore : 8.2
   },
    {
       productName : "Veeba",
       type : "peanut butter",
       ingredients : "Roasted Peanuts (91.0%), Sugar, Emulsifier and Stabilizer (INS471) and lodised Salt.", 
       healthScore : 8.7
   },
    {
       productName : "My Fitness",
       type : "peanut butter",
       ingredients : "Roasted Peanuts, Chocolate Paste, Sugar, Salt, Stabilizer (INS471).", 
       healthScore : 9.9
   },
   
   

]

//fucntion starts 


export const searchInDataBase = (input)=>{
    

    let res=[]
    input = input.toLowerCase()
    for(let i of products){
    if(i.type.includes(input) || i.productName.toLowerCase().includes(input)){
    res.push(i)
        }
    }

    let sorted = res.sort((a,b)=>{
    return b.healthScore-a.healthScore
    })

    return sorted

}

