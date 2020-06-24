exports.testPatients = [{id: "Alfred", station: "B-03", faculty: "Dermatologie", symtomps:"Gerötete Haut", diagnosis:"Hautkreps", medication:"AB12"}, 
{id: "Bernd", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{id: "Helga", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{id: "Jochen", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{id: "Karl", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{id: "Lea", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{id: "Manfred", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{id: "Nina", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{id: "Otto", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{id: "Rüdiger", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}];

exports.testStaff = 
[{id: "Helga", station: "B-03", faculty: "Dermatologie", titel: "Dr. med"}, 
{id: "Max", station: "A-02", faculty: "Neuro", titel: ""}, 
{id: "Norbert", station: "A-02", faculty: "Neuro", titel: ""}, 
{id: "Tim", station: "A-02", faculty: "Neuro", titel: ""}, 
{id: "Dieter", station: "A-02", faculty: "Neuro", titel: ""}, 
{id: "Hubert", station: "A-02", faculty: "Neuro", titel: ""}, 
{id: "Alfrid", station: "A-02", faculty: "Neuro", titel: ""}, 
{id: "Elfride", station: "A-02", faculty: "Neuro", titel: ""}, 
{id: "Helga", station: "B-02", faculty: "Neuro", titel: ""}]

exports.testBills = [
    {id: "2-Bett-Zimmer", amount: 250.50},
    {id: "Chefarzt Behandlung", amount: 350.50}
]

exports.testAppointments = [
    {patientId: "Dieter", time: "23.08.2020", station:"A-3", faculty:"Dermatologie", doctor:"Heinz Heiler"},
    {patientId: "Dieter", time: "28.08.2020", station:"A-3", faculty:"Dermatologie", doctor:"Heinz Heiler"},
]