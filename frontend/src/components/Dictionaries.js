const month={'Apr': 0, 'Aug': 1, 'Dec': 2, 'Feb': 3, 'Jan': 4, 'Jul': 5, 'Jun': 6, 'Mar': 7, 'May': 8, 'Nov': 9, 'Oct': 10, 'Sep': 11};

const day_of_week={'Friday': 0, 'Monday': 1, 'Saturday': 2, 'Sunday': 3, 'Thursday': 4, 'Tuesday': 5, 'Wednesday': 6};

const accident_area={'Rural': 0, 'Urban': 1};

const day_of_week_claimed={'0': 0, 'Friday': 1, 'Monday': 2, 'Saturday': 3, 'Sunday': 4, 'Thursday': 5, 'Tuesday': 6, 'Wednesday': 7}

const month_claimed={'0': 0, 'Apr': 1, 'Aug': 2, 'Dec': 3, 'Feb': 4, 'Jan': 5, 'Jul': 6, 'Jun': 7, 'Mar': 8, 'May': 9, 'Nov': 10, 'Oct': 11, 'Sep': 12};

const sex={'Female': 0, 'Male': 1};


const marital_status={'Divorced': 0, 'Married': 1, 'Single': 2, 'Widow': 3};

const fault={'Policy Holder': 0, 'Third Party': 1}

const policy_type= {'Sedan - All Perils': 0, 'Sedan - Collision': 1, 'Sedan - Liability': 2, 'Sport - All Perils': 3, 'Sport - Collision': 4, 'Sport - Liability': 5, 'Utility - All Perils': 6, 'Utility - Collision': 7, 'Utility - Liability': 8}

const vehicle_category= {'Sedan': 0, 'Sport': 1, 'Utility': 2};

const vehicle_price= {'20000 to 29000': 0, '30000 to 39000': 1, '40000 to 59000': 2, '60000 to 69000': 3, 'less than 20000': 4, 'more than 69000': 5};


const past_no_claims = {'1': 0, '2 to 4': 1, 'more than 4': 2, 'none': 3}; 

const age_of_vehicle= {'2 years': 0, '3 years': 1, '4 years': 2, '5 years': 3, '6 years': 4, '7 years': 5, 'more than 7': 6, 'new': 7};

const police_report_filed= {'No': 0, 'Yes': 1};

const witness_present= {'No': 0, 'Yes': 1};

const no_of_supplements={'1 to 2': 0, '3 to 5': 1, 'more than 5': 2, 'none': 3};

const address_change_claims={'1 year': 0, '2 to 3 years': 1, '4 to 8 years': 2, 'no change': 3, 'under 6 months': 4};

const base_policy={'All Perils': 0, 'Collision': 1, 'Liability': 2};

module.exports= {month,day_of_week,accident_area,day_of_week_claimed,month_claimed,sex,marital_status,fault,policy_type,vehicle_category,vehicle_price,past_no_claims,age_of_vehicle,police_report_filed,witness_present,no_of_supplements,address_change_claims,base_policy }