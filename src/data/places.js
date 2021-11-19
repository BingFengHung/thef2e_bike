const placeName = `臺北市:Taipei
新北市:NewTaipei
桃園市:Taoyuan
臺中市:Taichung
臺南市:Tainan
高雄市:Kaohsiung
基隆市:Keelung
新竹市:Hsinchu
新竹縣:HsinchuCounty
苗栗縣:MiaoliCounty
彰化縣:ChanghuaCounty
南投縣:NantouCounty
雲林縣:YunlinCounty
嘉義縣:ChiayiCounty
嘉義市:Chiayi
屏東縣:PingtungCounty
宜蘭縣:YilanCounty
花蓮縣:HualienCounty
臺東縣:TaitungCounty
金門縣:KinmenCounty
澎湖縣:PenghuCounty
連江縣:LienchiangCounty`;

let places = placeName.split(/\r?\n/);

const stationCounties = 
`臺中市:Taichung
新竹市:Hsinchu
苗栗縣:MiaoliCounty
新北市:NewTaipei
屏東縣:PingtungCounty
金門縣:KinmenCounty
桃園市:Taoyuan
臺北市:Taipei
高雄市:Kaohsiung
臺南市:Tainan
嘉義市:Chiayi`;

let stations = stationCounties.split(/\r?\n/);

const roadCountires = 
`臺中市:Taichung
基隆市:Keelung
新竹縣:HsinchuCounty
苗栗縣:MiaoliCounty
彰化縣:ChanghuaCounty
新北市:NewTaipei
南投縣:NantouCounty
雲林縣:YunlinCounty
嘉義縣:ChiayiCounty
嘉義市:Chiayi
屏東縣:PingtungCounty
宜蘭縣:YilanCounty
花蓮縣:HualienCounty
臺東縣:TaitungCounty
金門縣:KinmenCounty
澎湖縣:PenghuCounty
桃園市:Taoyuan
臺北市:Taipei
高雄市:Kaohsiung
臺南市:Tainan`;
let roads = roadCountires.split(/\r?\n/);


export const placeList = places.map((i, idx) => i.split(':'));
export const bikeStations = stations.map((i, idx) => i.split(':'))
export const bikeRoads = roads.map(i => i.split(':'))