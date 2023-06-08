import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:any =[
    {
      "userName":"Ahmed",
      "email":"ahmed@gmail.com",
      "phone":"02123",
      "state":"pass",
      "image":'https://www.google.com/search?sxsrf=APwXEdej3V6NLapodKc69568uOrwldlOKQ:1685100431206&q=avatar+image&tbm=isch&source=univ&fir=ibVojFATKVuZcM%252CFm8XYmx6YFYMIM%252C_%253BJjq5a5o5G80fpM%252CIN--qpeX1hje-M%252C_%253B3ieVDLEJVcWu5M%252CE32sUXSsANHKUM%252C_%253Bjai2OL9CvAo52M%252CuglQnDVaECXO6M%252C_%253ByRJ2dvO7gZnMRM%252Ct7Axemi6DEPjMM%252C_%253BjuW1DHwg2iSc7M%252CBZTukm0DarLttM%252C_%253BAhCy_cweM6lOWM%252CIN--qpeX1hje-M%252C_%253BGaL-L0l_KfyGDM%252CT4TpZnpvbGGx7M%252C_%253BhJqQsjhoQ8NugM%252CmCCGDy1_1-7lvM%252C_%253BcPXYODj90LFBgM%252CUUPtDBJdc_Dc4M%252C_%253B94-Hcxcungf41M%252C0zpuT7PRhpWJMM%252C_%253BHeX1thne0pYiGM%252C95dfjlEjIdTZ7M%252C_%253B1NPRspUZnl8PJM%252CJ_Irblfupo_8_M%252C_%253BP5TKBYTJl6Ln-M%252CrloQdySC7St2hM%252C_%253BYFPrm7iW1pfkyM%252CmCCGDy1_1-7lvM%252C_&usg=AI4_-kRsjOg32I7v96-lqglzrjMgmgAqhw&sa=X&ved=2ahUKEwiqn_Ok8JL_AhUSoaQKHTvfDggQjJkEegQICBAC&biw=1517&bih=730&dpr=0.9#imgrc=UcB-3GXhmhLR7M'
    },
    {
      "userName":"Yasmine",
      "email":"yasmine@gmail.com",
      "phone":"02456",
      "state":"pass",
      "image":'https://www.google.com/search?sxsrf=APwXEdej3V6NLapodKc69568uOrwldlOKQ:1685100431206&q=avatar+image&tbm=isch&source=univ&fir=ibVojFATKVuZcM%252CFm8XYmx6YFYMIM%252C_%253BJjq5a5o5G80fpM%252CIN--qpeX1hje-M%252C_%253B3ieVDLEJVcWu5M%252CE32sUXSsANHKUM%252C_%253Bjai2OL9CvAo52M%252CuglQnDVaECXO6M%252C_%253ByRJ2dvO7gZnMRM%252Ct7Axemi6DEPjMM%252C_%253BjuW1DHwg2iSc7M%252CBZTukm0DarLttM%252C_%253BAhCy_cweM6lOWM%252CIN--qpeX1hje-M%252C_%253BGaL-L0l_KfyGDM%252CT4TpZnpvbGGx7M%252C_%253BhJqQsjhoQ8NugM%252CmCCGDy1_1-7lvM%252C_%253BcPXYODj90LFBgM%252CUUPtDBJdc_Dc4M%252C_%253B94-Hcxcungf41M%252C0zpuT7PRhpWJMM%252C_%253BHeX1thne0pYiGM%252C95dfjlEjIdTZ7M%252C_%253B1NPRspUZnl8PJM%252CJ_Irblfupo_8_M%252C_%253BP5TKBYTJl6Ln-M%252CrloQdySC7St2hM%252C_%253BYFPrm7iW1pfkyM%252CmCCGDy1_1-7lvM%252C_&usg=AI4_-kRsjOg32I7v96-lqglzrjMgmgAqhw&sa=X&ved=2ahUKEwiqn_Ok8JL_AhUSoaQKHTvfDggQjJkEegQICBAC&biw=1517&bih=730&dpr=0.9#imgrc=AhCy_cweM6lOWM'
    },
    {
      "userName":"Ali",
      "email":"ali@gmail.com",
      "phone":"020458",
      "state":"fail",
      "image":'https://www.google.com/search?sxsrf=APwXEdej3V6NLapodKc69568uOrwldlOKQ:1685100431206&q=avatar+image&tbm=isch&source=univ&fir=ibVojFATKVuZcM%252CFm8XYmx6YFYMIM%252C_%253BJjq5a5o5G80fpM%252CIN--qpeX1hje-M%252C_%253B3ieVDLEJVcWu5M%252CE32sUXSsANHKUM%252C_%253Bjai2OL9CvAo52M%252CuglQnDVaECXO6M%252C_%253ByRJ2dvO7gZnMRM%252Ct7Axemi6DEPjMM%252C_%253BjuW1DHwg2iSc7M%252CBZTukm0DarLttM%252C_%253BAhCy_cweM6lOWM%252CIN--qpeX1hje-M%252C_%253BGaL-L0l_KfyGDM%252CT4TpZnpvbGGx7M%252C_%253BhJqQsjhoQ8NugM%252CmCCGDy1_1-7lvM%252C_%253BcPXYODj90LFBgM%252CUUPtDBJdc_Dc4M%252C_%253B94-Hcxcungf41M%252C0zpuT7PRhpWJMM%252C_%253BHeX1thne0pYiGM%252C95dfjlEjIdTZ7M%252C_%253B1NPRspUZnl8PJM%252CJ_Irblfupo_8_M%252C_%253BP5TKBYTJl6Ln-M%252CrloQdySC7St2hM%252C_%253BYFPrm7iW1pfkyM%252CmCCGDy1_1-7lvM%252C_&usg=AI4_-kRsjOg32I7v96-lqglzrjMgmgAqhw&sa=X&ved=2ahUKEwiqn_Ok8JL_AhUSoaQKHTvfDggQjJkEegQICBAC&biw=1517&bih=730&dpr=0.9#imgrc=ibVojFATKVuZcM'
    },
    {
      "userName":"Mohamed",
      "email":"mohamed@gmail.com",
      "phone":"020897",
      "state":"pass",
      "image":'https://www.google.com/search?sxsrf=APwXEdej3V6NLapodKc69568uOrwldlOKQ:1685100431206&q=avatar+image&tbm=isch&source=univ&fir=ibVojFATKVuZcM%252CFm8XYmx6YFYMIM%252C_%253BJjq5a5o5G80fpM%252CIN--qpeX1hje-M%252C_%253B3ieVDLEJVcWu5M%252CE32sUXSsANHKUM%252C_%253Bjai2OL9CvAo52M%252CuglQnDVaECXO6M%252C_%253ByRJ2dvO7gZnMRM%252Ct7Axemi6DEPjMM%252C_%253BjuW1DHwg2iSc7M%252CBZTukm0DarLttM%252C_%253BAhCy_cweM6lOWM%252CIN--qpeX1hje-M%252C_%253BGaL-L0l_KfyGDM%252CT4TpZnpvbGGx7M%252C_%253BhJqQsjhoQ8NugM%252CmCCGDy1_1-7lvM%252C_%253BcPXYODj90LFBgM%252CUUPtDBJdc_Dc4M%252C_%253B94-Hcxcungf41M%252C0zpuT7PRhpWJMM%252C_%253BHeX1thne0pYiGM%252C95dfjlEjIdTZ7M%252C_%253B1NPRspUZnl8PJM%252CJ_Irblfupo_8_M%252C_%253BP5TKBYTJl6Ln-M%252CrloQdySC7St2hM%252C_%253BYFPrm7iW1pfkyM%252CmCCGDy1_1-7lvM%252C_&usg=AI4_-kRsjOg32I7v96-lqglzrjMgmgAqhw&sa=X&ved=2ahUKEwiqn_Ok8JL_AhUSoaQKHTvfDggQjJkEegQICBAC&biw=1517&bih=730&dpr=0.9#imgrc=yRJ2dvO7gZnMRM&imgdii=3yHl2yPM7ZL1pM'
    },
    {
      "userName":"Hassan",
      "email":"hassan@gmail.com",
      "phone":"020897",
      "state":"fail",
      "image":'https://www.google.com/search?sxsrf=APwXEdej3V6NLapodKc69568uOrwldlOKQ:1685100431206&q=avatar+image&tbm=isch&source=univ&fir=ibVojFATKVuZcM%252CFm8XYmx6YFYMIM%252C_%253BJjq5a5o5G80fpM%252CIN--qpeX1hje-M%252C_%253B3ieVDLEJVcWu5M%252CE32sUXSsANHKUM%252C_%253Bjai2OL9CvAo52M%252CuglQnDVaECXO6M%252C_%253ByRJ2dvO7gZnMRM%252Ct7Axemi6DEPjMM%252C_%253BjuW1DHwg2iSc7M%252CBZTukm0DarLttM%252C_%253BAhCy_cweM6lOWM%252CIN--qpeX1hje-M%252C_%253BGaL-L0l_KfyGDM%252CT4TpZnpvbGGx7M%252C_%253BhJqQsjhoQ8NugM%252CmCCGDy1_1-7lvM%252C_%253BcPXYODj90LFBgM%252CUUPtDBJdc_Dc4M%252C_%253B94-Hcxcungf41M%252C0zpuT7PRhpWJMM%252C_%253BHeX1thne0pYiGM%252C95dfjlEjIdTZ7M%252C_%253B1NPRspUZnl8PJM%252CJ_Irblfupo_8_M%252C_%253BP5TKBYTJl6Ln-M%252CrloQdySC7St2hM%252C_%253BYFPrm7iW1pfkyM%252CmCCGDy1_1-7lvM%252C_&usg=AI4_-kRsjOg32I7v96-lqglzrjMgmgAqhw&sa=X&ved=2ahUKEwiqn_Ok8JL_AhUSoaQKHTvfDggQjJkEegQICBAC&biw=1517&bih=730&dpr=0.9#imgrc=hJqQsjhoQ8NugM&imgdii=l5h31ixNnvJT8M'
    },
  ]
}


