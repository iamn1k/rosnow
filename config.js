config = {
    // Настройка карты
    "south_coordinates" : [90.0, 53.0], // Южные координаты bbox карты
    "north_coordinates" : [96.0, 60.0], // Северные координаты bbox карты
    "map_center" : [92.857, 56.015], // Центр карты
    "tiles" : "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" , // Плитки карты схематичные
    "NOT USED tiles version 2" : "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", // Плитки карты снимки с космоса
    "exaggeration" : 1.5, // Увеличение рельефа

    // Настройка вышек связи
    "tower_scale" : 1000 , // Увеличение вышек связи
    "tower_path" : "tower.glb", // Путь до модели вышки связи
    "tower_radius" : 3000, // Радиус сигнала вышки в метрах
    "placetowers_angles" : [0, 72, 144, 216, 288], // Углы расстановки вышек относительно центральной, которая находится в map_center
    "placetowers_distance" : 20000, // Расстояние вышек по кругу до центральной

    // Настройка сферы сигнала
    "sphere_color" : "blue", // Цвет сферы
    "sphere_opacity" : 0.05, // Прозрачность сферы

    // Настройка линии пути
    "line_color" : "#dd0000", // Цвет лини

    // Настройка самолета
    "plane_path" :  "scene.glb", // Путь до модели самолета
    "plane_scale" :  0.1,  // Увеличение модели самолета
    "plane_rotation" : { x: 0, y: 0, z: 0 }, // Вращение модели самолета
    "plane_flight_speed" : 1000, // Скорость самолета в КМ/ Ч
    "plane_camera_offset" : {
        x: 0.01,   
        y: 0.001,   
        z: -0.001  
    } // Положение камеры самолета в режиме следования

}