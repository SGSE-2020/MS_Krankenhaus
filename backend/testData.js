exports.testPatients = [{userid: 1, name: "Alfred", station: "B-03", faculty: "Dermatologie", symtomps:"Gerötete Haut", diagnosis:"Hautkreps", medication:"AB12"}, 
{userid: 2, name: "Bernd", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{userid: 3, name: "Helga", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{userid: 4, name: "Jochen", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{userid: 5, name: "Karl", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{userid: 6, name: "Lea", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{userid: 7, name: "Manfred", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{userid: 8, name: "Nina", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{userid: 9, name: "Otto", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}, 
{userid: 10, name: "Rüdiger", station: "Intensiv", faculty: "Neuro", symtomps:"Verschwommene Sicht", diagnosis:"Tumor", medication:"IBU-600"}];

exports.testStaff = 
[{userid: "Helga", station: "B-03", faculty: "Dermatologie", titel: "Dr. med"}, 
{userid: "Max", station: "A-02", faculty: "Neuro", titel: ""}, 
{userid: "Norbert", station: "A-02", faculty: "Neuro", titel: ""}, 
{userid: "Tim", station: "A-02", faculty: "Neuro", titel: ""}, 
{userid: "Dieter", station: "A-02", faculty: "Neuro", titel: ""}, 
{userid: "Hubert", station: "A-02", faculty: "Neuro", titel: ""}, 
{userid: "Alfrid", station: "A-02", faculty: "Neuro", titel: ""}, 
{userid: "Elfride", station: "A-02", faculty: "Neuro", titel: ""}, 
{userid: "Helga", station: "B-02", faculty: "Neuro", titel: ""}]

exports.testBills = [
    {id: "2-Bett-Zimmer", amount: 250.50},
    {id: "Chefarzt Behandlung", amount: 350.50}
]

exports.testAppointments = [
    {id: 1, patientid: "Karl", time: "23.08.2020", station:"A-3", faculty:"Dermatologie"},
    {id: 2, patientid: "Karl", time: "28.08.2020", station:"A-3", faculty:"Dermatologie"},
]
