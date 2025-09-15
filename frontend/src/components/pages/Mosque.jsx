import React, { useState, useEffect, useRef } from "react";
import { MapPin, Navigation, Clock, Search, AlertCircle } from "lucide-react";

export default function Mosque() {
  const [activeTab, setActiveTab] = useState("list-view"); // Start with list view
  const [searchQuery, setSearchQuery] = useState("");
  const [mosques, setMosques] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchRadius, setSearchRadius] = useState(1000);
  const [mapError, setMapError] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  // Mock mosque data with realistic prayer times
  const mockMosques = [
    {
      id: 1,
      name: "Al-Noor Mosque",
      address: "123 Main Street, Pune",
      lat: 18.5204,
      lng: 73.8567,
      currentPrayer: "Dhuhr",
      prayerStatus: "in-progress",
      progress: 50,
      nextPrayer: "Asr",
      nextPrayerTime: "15:30",
    },
    {
      id: 2,
      name: "Islamic Center",
      address: "456 Oak Avenue, Pune",
      lat: 18.5304,
      lng: 73.8667,
      currentPrayer: "Asr",
      prayerStatus: "starting-soon",
      progress: 0,
      nextPrayer: "Maghrib",
      nextPrayerTime: "18:45",
    },
    {
      id: 3,
      name: "Masjid Al-Rahman",
      address: "789 Pine Street, Pune",
      lat: 18.5104,
      lng: 73.8467,
      currentPrayer: "Fajr",
      prayerStatus: "completed",
      progress: 100,
      nextPrayer: "Dhuhr",
      nextPrayerTime: "12:30",
    },
    {
      id: 4,
      name: "Central Mosque",
      address: "321 Cedar Road, Pune",
      lat: 18.525,
      lng: 73.852,
      currentPrayer: "Maghrib",
      prayerStatus: "starting-soon",
      progress: 0,
      nextPrayer: "Isha",
      nextPrayerTime: "20:15",
    },
    {
      id: 5,
      name: "Masjid Iqra",
      address: "555 Elm Street, Pune",
      lat: 18.5404,
      lng: 73.8367,
      currentPrayer: "Isha",
      prayerStatus: "completed",
      progress: 100,
      nextPrayer: "Fajr",
      nextPrayerTime: "05:45",
    },
    {
      id: 6,
      name: "Bait-ul-Masjid",
      address: "777 Maple Avenue, Pune",
      lat: 18.5004,
      lng: 73.8767,
      currentPrayer: "Zuhr",
      prayerStatus: "starting-soon",
      progress: 0,
      nextPrayer: "Asr",
      nextPrayerTime: "15:15",
    },
  ];

  const switchTab = (tab) => {
    setActiveTab(tab);
    if (tab === "map-view" && !mapError) {
      setTimeout(() => {
        initializeMap();
      }, 100);
    }
  };

  const loadGoogleMapsScript = () => {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps) {
        resolve();
        return;
      }

      // For demo purposes, we'll simulate a map loading error to show the fallback
      // In production, you would use a real Google Maps API key
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCZSHXxWfetuAIBQibTGcH1dC1uS7jRAgk&libraries=places`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        if (window.google && window.google.maps) {
          resolve();
        } else {
          reject(new Error("Google Maps failed to load"));
        }
      };

      script.onerror = () => {
        reject(new Error("Failed to load Google Maps script"));
      };

      // Simulate API key error for demo
      setTimeout(() => {
        setMapError(true);
        reject(new Error("Invalid API key or quota exceeded"));
      }, 1000);

      document.head.appendChild(script);
    });
  };

  const initializeMap = async () => {
    if (!userLocation || !mapRef.current || mapError) return;

    try {
      await loadGoogleMapsScript();

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: userLocation.lat, lng: userLocation.lng },
        zoom: 14,
        styles: [
          {
            featureType: "poi.place_of_worship",
            elementType: "geometry",
            stylers: [{ color: "#4f46e5" }],
          },
        ],
      });

      mapInstanceRef.current = map;

      // Add user location marker
      new window.google.maps.Marker({
        position: { lat: userLocation.lat, lng: userLocation.lng },
        map: map,
        title: "Your Location",
        icon: {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3b82f6">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="3" fill="white"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(24, 24),
          anchor: new window.google.maps.Point(12, 12),
        },
      });

      // Clear existing markers
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];

      // Add mosque markers
      mosques.forEach((mosque) => {
        const marker = new window.google.maps.Marker({
          position: { lat: mosque.lat, lng: mosque.lng },
          map: map,
          title: mosque.name,
          icon: {
            url:
              "data:image/svg+xml;charset=UTF-8," +
              encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#059669">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5" fill="white"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(32, 32),
            anchor: new window.google.maps.Point(16, 32),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-3 min-w-[200px]">
              <h3 class="font-bold text-lg mb-2">${mosque.name}</h3>
              <p class="text-sm text-gray-600 mb-2">${mosque.address}</p>
              <div class="flex items-center text-sm">
                <span class="px-2 py-1 rounded-full text-xs font-medium ${
                  mosque.prayerStatus === "in-progress"
                    ? "bg-blue-100 text-blue-800"
                    : mosque.prayerStatus === "starting-soon"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }">
                  ${mosque.currentPrayer} - ${mosque.prayerStatus.replace(
            "-",
            " "
          )}
                </span>
              </div>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });

        markersRef.current.push(marker);
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      setMapError(true);
    }
  };

  const getCurrentLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);
          setLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          // Fallback to Pune coordinates
          setUserLocation({ lat: 18.5204, lng: 73.8567 });
          setLoading(false);
        }
      );
    } else {
      // Fallback to Pune coordinates
      setUserLocation({ lat: 18.5204, lng: 73.8567 });
      setLoading(false);
    }
  };

  const filterMosques = () => {
    if (!userLocation) return mockMosques;

    let filteredMosques = mockMosques.filter((mosque) => {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        mosque.lat,
        mosque.lng
      );
      return distance <= searchRadius;
    });

    if (searchQuery) {
      filteredMosques = filteredMosques.filter(
        (mosque) =>
          mosque.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          mosque.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredMosques;
  };

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lng2 - lng1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  const expandSearch = () => {
    setSearchRadius((prev) => prev + 1000);
  };

  const getPrayerStatusColor = (status) => {
    switch (status) {
      case "in-progress":
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white";
      case "starting-soon":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "completed":
        return "bg-gray-100 text-gray-800 border border-gray-200";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatPrayerStatus = (status) => {
    switch (status) {
      case "in-progress":
        return "Prayer in progress";
      case "starting-soon":
        return "Starting soon";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };

  const MapErrorFallback = () => (
    <div className="h-[450px] rounded-lg border border-red-200 bg-red-50 flex items-center justify-center">
      <div className="text-center p-6">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-red-800 mb-2">
          Map Unavailable
        </h3>
        <p className="text-red-600 mb-4 max-w-md">
          The map service is currently unavailable. This could be due to an
          invalid API key, exceeded quota, or network issues. Please use the
          list view to browse mosques.
        </p>
        <button
          onClick={() => setActiveTab("list-view")}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Switch to List View
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    const filtered = filterMosques();
    setMosques(filtered);
  }, [userLocation, searchQuery, searchRadius]);

  useEffect(() => {
    if (activeTab === "map-view" && userLocation && !mapError) {
      initializeMap();
    }
  }, [mosques, userLocation, activeTab]);

  return (
    <main className="flex-1 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Nearby Mosques
          </h1>
          <p className="text-gray-600">
            Find mosques near you with live prayer times
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Find Mosques
            </h2>

            {/* Search Input */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Search by name or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => switchTab("list-view")}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  activeTab === "list-view"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                List View
              </button>
              <button
                onClick={() => switchTab("map-view")}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  activeTab === "map-view"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Map View
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === "map-view" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Find Nearby Mosques
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={getCurrentLocation}
                      disabled={loading}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 rounded-lg transition-all disabled:opacity-50"
                    >
                      <Navigation className="h-4 w-4" />
                      {loading ? "Loading..." : "My Location"}
                    </button>
                    <button
                      onClick={expandSearch}
                      className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200 rounded-lg transition-all"
                    >
                      Expand Search ({searchRadius / 1000}km)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    {mapError ? (
                      <MapErrorFallback />
                    ) : (
                      <div
                        ref={mapRef}
                        className="h-[450px] rounded-lg border border-gray-200 shadow-sm bg-gray-100"
                        style={{ minHeight: "450px" }}
                      >
                        {!userLocation && (
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                              <p className="text-gray-600">Loading map...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-1">
                    <div className="h-[450px] overflow-y-auto space-y-3 pr-2">
                      {mosques.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                          <MapPin className="h-12 w-12 mb-3" />
                          <p className="text-center mb-3">
                            No mosques found nearby
                          </p>
                          <button
                            onClick={expandSearch}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Increase search radius
                          </button>
                        </div>
                      ) : (
                        mosques.map((mosque) => (
                          <div
                            key={mosque.id}
                            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-gray-800">
                                {mosque.name}
                              </h4>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getPrayerStatusColor(
                                  mosque.prayerStatus
                                )}`}
                              >
                                {mosque.currentPrayer}
                              </span>
                            </div>
                            <div className="flex items-center text-gray-600 text-sm mb-2">
                              <MapPin className="h-3 w-3 mr-1" />
                              {mosque.address}
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                              <Clock className="h-3 w-3 mr-1" />
                              {formatPrayerStatus(mosque.prayerStatus)}
                            </div>
                            {mosque.progress > 0 && (
                              <div className="mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                  <div
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full transition-all"
                                    style={{ width: `${mosque.progress}%` }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "list-view" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Mosques Near You
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={getCurrentLocation}
                      disabled={loading}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 rounded-lg transition-all disabled:opacity-50"
                    >
                      <Navigation className="h-4 w-4" />
                      {loading ? "Loading..." : "My Location"}
                    </button>
                    <button
                      onClick={expandSearch}
                      className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200 rounded-lg transition-all"
                    >
                      Expand Search ({searchRadius / 1000}km)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mosques.length === 0 ? (
                    <div className="col-span-full flex flex-col items-center justify-center py-12 text-gray-500">
                      <MapPin className="h-16 w-16 mb-4" />
                      <p className="text-xl mb-2">No mosques found</p>
                      <p className="text-gray-400 mb-4">
                        Try expanding your search radius or clearing your search
                      </p>
                      <button
                        onClick={expandSearch}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Expand Search ({searchRadius / 1000}km)
                      </button>
                    </div>
                  ) : (
                    mosques.map((mosque) => (
                      <div
                        key={mosque.id}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                              {mosque.name}
                            </h3>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getPrayerStatusColor(
                                mosque.prayerStatus
                              )}`}
                            >
                              {mosque.currentPrayer}
                            </span>
                          </div>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span className="text-sm">{mosque.address}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-4 w-4 mr-2" />
                              <span className="text-sm">
                                {formatPrayerStatus(mosque.prayerStatus)}
                              </span>
                            </div>
                          </div>

                          {mosque.progress > 0 && (
                            <div className="mb-4">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all"
                                  style={{ width: `${mosque.progress}%` }}
                                />
                              </div>
                            </div>
                          )}

                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>
                              Next: {mosque.nextPrayer} at{" "}
                              {mosque.nextPrayerTime}
                            </span>
                            <span>
                              {userLocation
                                ? (
                                    calculateDistance(
                                      userLocation.lat,
                                      userLocation.lng,
                                      mosque.lat,
                                      mosque.lng
                                    ) / 1000
                                  ).toFixed(1)
                                : "0.0"}
                              km
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

// import React, { useState, useEffect, useRef } from "react";
// import { MapPin, Navigation, Clock, Search } from "lucide-react";

// export default function Mosque() {
//   const [activeTab, setActiveTab] = useState("map-view");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [mosques, setMosques] = useState([]);
//   const [userLocation, setUserLocation] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [searchRadius, setSearchRadius] = useState(1000); // 1km in meters
//   const mapRef = useRef(null);
//   const mapInstanceRef = useRef(null);
//   const markersRef = useRef([]);

//   // Mock mosque data with realistic prayer times
//   const mockMosques = [
//     {
//       id: 1,
//       name: "Al-Noor Mosque",
//       address: "123 Main Street, City",
//       lat: 18.5204,
//       lng: 73.8567,
//       currentPrayer: "Dhuhr",
//       prayerStatus: "in-progress",
//       progress: 50,
//       nextPrayer: "Asr",
//       nextPrayerTime: "15:30",
//     },
//     {
//       id: 2,
//       name: "Islamic Center",
//       address: "456 Oak Avenue, City",
//       lat: 18.5304,
//       lng: 73.8667,
//       currentPrayer: "Asr",
//       prayerStatus: "starting-soon",
//       progress: 0,
//       nextPrayer: "Maghrib",
//       nextPrayerTime: "18:45",
//     },
//     {
//       id: 3,
//       name: "Masjid Al-Rahman",
//       address: "789 Pine Street, City",
//       lat: 18.5104,
//       lng: 73.8467,
//       currentPrayer: "Fajr",
//       prayerStatus: "completed",
//       progress: 100,
//       nextPrayer: "Dhuhr",
//       nextPrayerTime: "12:30",
//     },
//     {
//       id: 4,
//       name: "Central Mosque",
//       address: "321 Cedar Road, City",
//       lat: 18.525,
//       lng: 73.852,
//       currentPrayer: "Maghrib",
//       prayerStatus: "starting-soon",
//       progress: 0,
//       nextPrayer: "Isha",
//       nextPrayerTime: "20:15",
//     },
//   ];

//   const switchTab = (tab) => {
//     setActiveTab(tab);
//   };

//   const initializeMap = () => {
//     if (!userLocation || !mapRef.current) return;

//     const map = new window.google.maps.Map(mapRef.current, {
//       center: { lat: userLocation.lat, lng: userLocation.lng },
//       zoom: 14,
//       styles: [
//         {
//           featureType: "poi.place_of_worship",
//           elementType: "geometry",
//           stylers: [{ color: "#4f46e5" }],
//         },
//       ],
//     });

//     mapInstanceRef.current = map;

//     // Add user location marker
//     new window.google.maps.Marker({
//       position: { lat: userLocation.lat, lng: userLocation.lng },
//       map: map,
//       title: "Your Location",
//       icon: {
//         url:
//           "data:image/svg+xml;charset=UTF-8," +
//           encodeURIComponent(`
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3b82f6">
//             <circle cx="12" cy="12" r="10"/>
//             <circle cx="12" cy="12" r="3" fill="white"/>
//           </svg>
//         `),
//         scaledSize: new window.google.maps.Size(24, 24),
//         anchor: new window.google.maps.Point(12, 12),
//       },
//     });

//     // Add mosque markers
//     markersRef.current.forEach((marker) => marker.setMap(null));
//     markersRef.current = [];

//     mosques.forEach((mosque) => {
//       const marker = new window.google.maps.Marker({
//         position: { lat: mosque.lat, lng: mosque.lng },
//         map: map,
//         title: mosque.name,
//         icon: {
//           url:
//             "data:image/svg+xml;charset=UTF-8," +
//             encodeURIComponent(`
//             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#059669">
//               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
//               <circle cx="12" cy="9" r="2.5" fill="white"/>
//             </svg>
//           `),
//           scaledSize: new window.google.maps.Size(32, 32),
//           anchor: new window.google.maps.Point(16, 32),
//         },
//       });

//       const infoWindow = new window.google.maps.InfoWindow({
//         content: `
//           <div class="p-3 min-w-[200px]">
//             <h3 class="font-bold text-lg mb-2">${mosque.name}</h3>
//             <p class="text-sm text-gray-600 mb-2">${mosque.address}</p>
//             <div class="flex items-center text-sm">
//               <span class="px-2 py-1 rounded-full text-xs font-medium ${
//                 mosque.prayerStatus === "in-progress"
//                   ? "bg-blue-100 text-blue-800"
//                   : mosque.prayerStatus === "starting-soon"
//                   ? "bg-yellow-100 text-yellow-800"
//                   : "bg-gray-100 text-gray-800"
//               }">
//                 ${mosque.currentPrayer} - ${mosque.prayerStatus.replace(
//           "-",
//           " "
//         )}
//               </span>
//             </div>
//           </div>
//         `,
//       });

//       marker.addListener("click", () => {
//         infoWindow.open(map, marker);
//       });

//       markersRef.current.push(marker);
//     });
//   };

//   const getCurrentLocation = () => {
//     setLoading(true);
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const location = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setUserLocation(location);
//           setLoading(false);
//         },
//         (error) => {
//           console.error("Error getting location:", error);
//           // Fallback to Pune coordinates
//           setUserLocation({ lat: 18.5204, lng: 73.8567 });
//           setLoading(false);
//         }
//       );
//     } else {
//       // Fallback to Pune coordinates
//       setUserLocation({ lat: 18.5204, lng: 73.8567 });
//       setLoading(false);
//     }
//   };

//   const filterMosques = () => {
//     if (!userLocation) return [];

//     let filteredMosques = mockMosques.filter((mosque) => {
//       const distance = calculateDistance(
//         userLocation.lat,
//         userLocation.lng,
//         mosque.lat,
//         mosque.lng
//       );
//       return distance <= searchRadius;
//     });

//     if (searchQuery) {
//       filteredMosques = filteredMosques.filter(
//         (mosque) =>
//           mosque.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           mosque.address.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     return filteredMosques;
//   };

//   const calculateDistance = (lat1, lng1, lat2, lng2) => {
//     const R = 6371e3; // Earth's radius in meters
//     const φ1 = (lat1 * Math.PI) / 180;
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lng2 - lng1) * Math.PI) / 180;

//     const a =
//       Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
//   };

//   const expandSearch = () => {
//     setSearchRadius((prev) => prev + 1000);
//   };

//   const getPrayerStatusColor = (status) => {
//     switch (status) {
//       case "in-progress":
//         return "bg-gradient-to-r from-blue-500 to-blue-600 text-white";
//       case "starting-soon":
//         return "bg-yellow-100 text-yellow-800 border border-yellow-200";
//       case "completed":
//         return "bg-gray-100 text-gray-800 border border-gray-200";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const formatPrayerStatus = (status) => {
//     switch (status) {
//       case "in-progress":
//         return "Prayer in progress";
//       case "starting-soon":
//         return "Starting soon";
//       case "completed":
//         return "Completed";
//       default:
//         return status;
//     }
//   };

//   useEffect(() => {
//     getCurrentLocation();
//     // const apiKey = "AIzaSyDE2lfYvTVu0DxIKQoOocdGEVLMC5emFUY";
//     const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;

//     // Load Google Maps API
//     if (!window.google) {
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
//       script.async = true;
//       script.defer = true;
//       script.onload = () => {
//         if (userLocation) {
//           initializeMap();
//         }
//       };
//       document.head.appendChild(script);
//     }
//   }, []);

//   useEffect(() => {
//     const filtered = filterMosques();
//     setMosques(filtered);
//   }, [userLocation, searchQuery, searchRadius]);

//   useEffect(() => {
//     if (window.google && userLocation && activeTab === "map-view") {
//       initializeMap();
//     }
//   }, [mosques, userLocation, activeTab]);

//   return (
//     <main className="flex-1 min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//             Nearby Mosques
//           </h1>
//           <p className="text-gray-600">
//             Find mosques near you with live prayer times
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-8">
//           <div className="p-6 border-b border-gray-100">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Find Mosques
//             </h2>

//             {/* Search Input */}
//             <div className="relative mb-6">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <input
//                 className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                 placeholder="Search by name or location"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>

//             {/* Tabs */}
//             <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
//               <button
//                 onClick={() => switchTab("map-view")}
//                 className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
//                   activeTab === "map-view"
//                     ? "bg-white text-blue-600 shadow-sm"
//                     : "text-gray-600 hover:text-gray-800"
//                 }`}
//               >
//                 Map View
//               </button>
//               <button
//                 onClick={() => switchTab("list-view")}
//                 className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
//                   activeTab === "list-view"
//                     ? "bg-white text-blue-600 shadow-sm"
//                     : "text-gray-600 hover:text-gray-800"
//                 }`}
//               >
//                 List View
//               </button>
//             </div>
//           </div>

//           <div className="p-6">
//             {activeTab === "map-view" && (
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//                     Find Nearby Mosques
//                   </h3>
//                   <div className="flex gap-3">
//                     <button
//                       onClick={getCurrentLocation}
//                       disabled={loading}
//                       className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 rounded-lg transition-all"
//                     >
//                       <Navigation className="h-4 w-4" />
//                       {loading ? "Loading..." : "My Location"}
//                     </button>
//                     <button
//                       onClick={expandSearch}
//                       className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200 rounded-lg transition-all"
//                     >
//                       Expand Search ({searchRadius / 1000}km)
//                     </button>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                   <div className="lg:col-span-2">
//                     <div
//                       ref={mapRef}
//                       className="h-[450px] rounded-lg border border-gray-200 shadow-sm bg-gray-100"
//                       style={{ minHeight: "450px" }}
//                     >
//                       {!userLocation && (
//                         <div className="flex items-center justify-center h-full">
//                           <div className="text-center">
//                             <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-3" />
//                             <p className="text-gray-600">Loading map...</p>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="lg:col-span-1">
//                     <div className="h-[450px] overflow-y-auto space-y-3 pr-2">
//                       {mosques.length === 0 ? (
//                         <div className="flex flex-col items-center justify-center h-full text-gray-500">
//                           <MapPin className="h-12 w-12 mb-3" />
//                           <p className="text-center mb-3">
//                             No mosques found nearby
//                           </p>
//                           <button
//                             onClick={expandSearch}
//                             className="text-blue-600 hover:text-blue-700 font-medium"
//                           >
//                             Increase search radius
//                           </button>
//                         </div>
//                       ) : (
//                         mosques.map((mosque) => (
//                           <div
//                             key={mosque.id}
//                             className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
//                           >
//                             <div className="flex justify-between items-start mb-2">
//                               <h4 className="font-semibold text-gray-800">
//                                 {mosque.name}
//                               </h4>
//                               <span
//                                 className={`px-2 py-1 rounded-full text-xs font-medium ${getPrayerStatusColor(
//                                   mosque.prayerStatus
//                                 )}`}
//                               >
//                                 {mosque.currentPrayer}
//                               </span>
//                             </div>
//                             <div className="flex items-center text-gray-600 text-sm mb-2">
//                               <MapPin className="h-3 w-3 mr-1" />
//                               {mosque.address}
//                             </div>
//                             <div className="flex items-center text-gray-600 text-sm">
//                               <Clock className="h-3 w-3 mr-1" />
//                               {formatPrayerStatus(mosque.prayerStatus)}
//                             </div>
//                             {mosque.progress > 0 && (
//                               <div className="mt-2">
//                                 <div className="w-full bg-gray-200 rounded-full h-1.5">
//                                   <div
//                                     className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full transition-all"
//                                     style={{ width: `${mosque.progress}%` }}
//                                   />
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         ))
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "list-view" && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {mosques.length === 0 ? (
//                   <div className="col-span-full flex flex-col items-center justify-center py-12 text-gray-500">
//                     <MapPin className="h-16 w-16 mb-4" />
//                     <p className="text-xl mb-2">No mosques found</p>
//                     <p className="text-gray-400 mb-4">
//                       Try expanding your search radius
//                     </p>
//                     <button
//                       onClick={expandSearch}
//                       className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       Expand Search ({searchRadius / 1000}km)
//                     </button>
//                   </div>
//                 ) : (
//                   mosques.map((mosque) => (
//                     <div
//                       key={mosque.id}
//                       className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
//                     >
//                       <div className="p-6">
//                         <div className="flex justify-between items-start mb-4">
//                           <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//                             {mosque.name}
//                           </h3>
//                           <span
//                             className={`px-3 py-1 rounded-full text-xs font-medium ${getPrayerStatusColor(
//                               mosque.prayerStatus
//                             )}`}
//                           >
//                             {mosque.currentPrayer}
//                           </span>
//                         </div>

//                         <div className="space-y-2 mb-4">
//                           <div className="flex items-center text-gray-600">
//                             <MapPin className="h-4 w-4 mr-2" />
//                             <span className="text-sm">{mosque.address}</span>
//                           </div>
//                           <div className="flex items-center text-gray-600">
//                             <Clock className="h-4 w-4 mr-2" />
//                             <span className="text-sm">
//                               {formatPrayerStatus(mosque.prayerStatus)}
//                             </span>
//                           </div>
//                         </div>

//                         {mosque.progress > 0 && (
//                           <div className="mb-4">
//                             <div className="w-full bg-gray-200 rounded-full h-2">
//                               <div
//                                 className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all"
//                                 style={{ width: `${mosque.progress}%` }}
//                               />
//                             </div>
//                           </div>
//                         )}

//                         <div className="flex justify-between items-center text-sm text-gray-500">
//                           <span>
//                             Next: {mosque.nextPrayer} at {mosque.nextPrayerTime}
//                           </span>
//                           <span>
//                             {(
//                               calculateDistance(
//                                 userLocation?.lat || 0,
//                                 userLocation?.lng || 0,
//                                 mosque.lat,
//                                 mosque.lng
//                               ) / 1000
//                             ).toFixed(1)}
//                             km
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function Mosque() {
//   const [activeTab, setActiveTab] = useState("map-view");

//   const switchTab = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <main className="flex-1">
//       <div className="container mx-auto px-4 py-8">
//         <div className="scroll-trigger ">
//           <div>
//             <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
//               Nearby Mosques
//             </h1>
//           </div>
//         </div>
//         <div className="scroll-trigger ">
//           <div>
//             <div className="rounded-lg border text-card-foreground shadow-sm mb-8 backdrop-blur-sm bg-background/80 border-primary/20">
//               <div className="flex flex-col space-y-1.5 p-6">
//                 <div className="font-semibold tracking-tight text-xl">
//                   Find Mosques
//                 </div>
//               </div>
//               <div className="p-6 pt-0">
//                 <div className="relative mb-6">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
//                   >
//                     <circle cx="11" cy="11" r="8"></circle>
//                     <path d="m21 21-4.3-4.3"></path>
//                   </svg>
//                   <input
//                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
//                     placeholder="Search by name or location"
//                     value=""
//                     fdprocessedid="08j8s"
//                   />
//                 </div>
//                 <div dir="ltr" data-orientation="horizontal">
//                   <div
//                     role="tablist"
//                     aria-orientation="horizontal"
//                     className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground mb-4"
//                     tabindex="0"
//                     data-orientation="horizontal"
//                     style={{ outline: "none" }}
//                   >
//                     <button
//                       type="button"
//                       role="tab"
//                       aria-selected="false"
//                       aria-controls="content-map"
//                       data-state="inactive"
//                       id="map-view"
//                       className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
//                       tabindex="-1"
//                       data-orientation="horizontal"
//                       data-radix-collection-item=""
//                       fdprocessedid="5m9qx5"
//                       onClick={() => switchTab("map-view")}
//                       aria-selected={
//                         activeTab === "map-view" ? "true" : "false"
//                       }
//                       data-state={
//                         activeTab === "map-view" ? "active" : "inactive"
//                       }
//                     >
//                       Map View
//                     </button>
//                     <button
//                       type="button"
//                       role="tab"
//                       aria-selected="true"
//                       aria-controls="content-list"
//                       data-state="active"
//                       id="list-view"
//                       className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
//                       tabindex="0"
//                       data-orientation="horizontal"
//                       data-radix-collection-item=""
//                       fdprocessedid="jkm92"
//                       onClick={() => switchTab("list-view")}
//                       aria-selected={
//                         activeTab === "list-view" ? "true" : "false"
//                       }
//                       data-state={
//                         activeTab === "list-view" ? "active" : "inactive"
//                       }
//                     >
//                       List View
//                     </button>
//                   </div>
//                   <div
//                     data-state="inactive"
//                     data-orientation="horizontal"
//                     role="tabpanel"
//                     aria-labelledby="radix-:r2:-trigger-map"
//                     id="radix-:r2:-content-map"
//                     tabindex="0"
//                     className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//                     hidden=""
//                   ></div>
//                   {activeTab === "map-view" && (
//                     <div
//                       data-state="active"
//                       data-orientation="horizontal"
//                       role="tabpanel"
//                       aria-labelledby="radix-:r2:-trigger-map"
//                       id="radix-:r2:-content-map"
//                       tabindex="0"
//                       className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//                     >
//                       <div className="space-y-4">
//                         <div className="flex justify-between items-center">
//                           <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
//                             Find Nearby Mosques
//                           </h2>
//                           <div className="flex gap-2">
//                             <button
//                               className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10"
//                               fdprocessedid="ok7g8k"
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 stroke-width="2"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 className="lucide lucide-navigation h-4 w-4 mr-2"
//                               >
//                                 <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
//                               </svg>
//                               My Location
//                             </button>
//                             <button
//                               className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10"
//                               fdprocessedid="nfjo2c"
//                             >
//                               Expand Search (1km)
//                             </button>
//                           </div>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                           <div className="md:col-span-2">
//                             <div className="h-[400px] rounded-lg border border-primary/20 shadow-md overflow-hidden"></div>
//                           </div>
//                           <div className="h-[400px] overflow-y-auto pr-2 space-y-2">
//                             <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 stroke-width="2"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 className="lucide lucide-map-pin h-8 w-8 mb-2"
//                               >
//                                 <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
//                                 <circle cx="12" cy="10" r="3"></circle>
//                               </svg>
//                               <p className="text-center">
//                                 No mosques found nearby
//                               </p>
//                               <button
//                                 className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-2"
//                                 fdprocessedid="3mvw78"
//                               >
//                                 Increase search radius
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   {activeTab === "list-view" && (
//                     <div
//                       data-state="active"
//                       data-orientation="horizontal"
//                       role="tabpanel"
//                       aria-labelledby="radix-:r2:-trigger-list"
//                       id="radix-:r2:-content-list"
//                       tabindex="0"
//                       className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//                     >
//                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         <div>
//                           <a href="/mosque/1">
//                             <div className="rounded-lg border text-card-foreground shadow-sm h-full hover:shadow-md transition-shadow border-primary/20 overflow-hidden backdrop-blur-sm bg-background/80">
//                               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
//                               <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
//                               <div className="flex flex-col space-y-1.5 p-6 relative z-10">
//                                 <div className="flex justify-between items-start">
//                                   <div className="font-semibold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
//                                     Al-Noor Mosque
//                                   </div>
//                                   <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 bg-gradient-to-r from-primary to-blue-500">
//                                     Dhuhr: Rakat 2
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="p-6 pt-0 relative z-10">
//                                 <div className="flex items-center text-muted-foreground mb-2">
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-width="2"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     className="lucide lucide-map-pin h-4 w-4 mr-2"
//                                   >
//                                     <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
//                                     <circle cx="12" cy="10" r="3"></circle>
//                                   </svg>
//                                   <span className="text-sm">
//                                     123 Main Street, City
//                                   </span>
//                                 </div>
//                                 <div className="flex items-center text-muted-foreground">
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-width="2"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     className="lucide lucide-clock h-4 w-4 mr-2"
//                                   >
//                                     <circle cx="12" cy="12" r="10"></circle>
//                                     <polyline points="12 6 12 12 16 14"></polyline>
//                                   </svg>
//                                   <span className="text-sm">
//                                     Prayer in progress
//                                   </span>
//                                 </div>
//                               </div>
//                               <div className="flex items-center p-6 pt-0 relative z-10">
//                                 <div className="text-sm text-muted-foreground w-full">
//                                   <div className="w-full bg-muted rounded-full h-2">
//                                     <div
//                                       className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full"
//                                       style={{ width: "50%" }}
//                                     ></div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </a>
//                         </div>
//                         <div style={{ transform: "translateY(-0.0030446px)" }}>
//                           <a href="/mosque/2">
//                             <div className="rounded-lg border text-card-foreground shadow-sm h-full hover:shadow-md transition-shadow border-primary/20 overflow-hidden backdrop-blur-sm bg-background/80">
//                               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
//                               <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
//                               <div className="flex flex-col space-y-1.5 p-6 relative z-10">
//                                 <div className="flex justify-between items-start">
//                                   <div className="font-semibold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
//                                     Islamic Center
//                                   </div>
//                                   <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
//                                     Asr
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="p-6 pt-0 relative z-10">
//                                 <div className="flex items-center text-muted-foreground mb-2">
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-width="2"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     className="lucide lucide-map-pin h-4 w-4 mr-2"
//                                   >
//                                     <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
//                                     <circle cx="12" cy="10" r="3"></circle>
//                                   </svg>
//                                   <span className="text-sm">
//                                     456 Oak Avenue, City
//                                   </span>
//                                 </div>
//                                 <div className="flex items-center text-muted-foreground">
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-width="2"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     className="lucide lucide-clock h-4 w-4 mr-2"
//                                   >
//                                     <circle cx="12" cy="12" r="10"></circle>
//                                     <polyline points="12 6 12 12 16 14"></polyline>
//                                   </svg>
//                                   <span className="text-sm">Starting soon</span>
//                                 </div>
//                               </div>
//                               <div className="flex items-center p-6 pt-0 relative z-10">
//                                 <div className="text-sm text-muted-foreground w-full"></div>
//                               </div>
//                             </div>
//                           </a>
//                         </div>
//                         <div>
//                           <a href="/mosque/3">
//                             <div className="rounded-lg border text-card-foreground shadow-sm h-full hover:shadow-md transition-shadow border-primary/20 overflow-hidden backdrop-blur-sm bg-background/80">
//                               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
//                               <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
//                               <div className="flex flex-col space-y-1.5 p-6 relative z-10">
//                                 <div className="flex justify-between items-start">
//                                   <div className="font-semibold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
//                                     Masjid Al-Rahman
//                                   </div>
//                                   <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
//                                     Fajr
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="p-6 pt-0 relative z-10">
//                                 <div className="flex items-center text-muted-foreground mb-2">
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-width="2"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     className="lucide lucide-map-pin h-4 w-4 mr-2"
//                                   >
//                                     <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
//                                     <circle cx="12" cy="10" r="3"></circle>
//                                   </svg>
//                                   <span className="text-sm">
//                                     789 Pine Street, City
//                                   </span>
//                                 </div>
//                                 <div className="flex items-center text-muted-foreground">
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-width="2"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     className="lucide lucide-clock h-4 w-4 mr-2"
//                                   >
//                                     <circle cx="12" cy="12" r="10"></circle>
//                                     <polyline points="12 6 12 12 16 14"></polyline>
//                                   </svg>
//                                   <span className="text-sm">Completed</span>
//                                 </div>
//                               </div>
//                               <div className="flex items-center p-6 pt-0 relative z-10">
//                                 <div className="text-sm text-muted-foreground w-full"></div>
//                               </div>
//                             </div>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
