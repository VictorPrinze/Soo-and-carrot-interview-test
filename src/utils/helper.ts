interface Event {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    continent: string;
    description: string;
}

export const getCompetitions = () => {
    return [
        { label: "Sports", value: "Sports" },
        { label: "Cultural and Artistic", value: "Cultural and Artistic" },
        { label: "Academy", value: "Academy" },
        { label: "Technology and Innovation", value: "Technology and Innovation" },
        { label: "Gaming and eSports", value: "Gaming and eSports" },
        { label: "Beauty Pageants and Fashion", value: "Beauty Pageants and Fashion" },
        { label: "Culinary", value: "Culinary" },
    ];;
}

export const getCompetitionEvents = () => {
    const events = [
        {
            id: "1",
            title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
            startDate: "2026-01-01",
            endDate: "2026-09-01",
            continent: "Asian",
            description: "Pyeongchang, Gangwon-do, Korea Very Very long city name name name name" 
        },
        {
            id: "2",
            title: "Asian Game - Marital art 2025 (Winter)",
            startDate: "2025-02-11",
            endDate: "2025-02-19",
            continent: "Asian",
            description: "Focuses on indoor sports and martial arts disciplines, held every four years." 
        },
        {
            id: "3",
            title: "200th European Games - UEFA 2025 (Summer)",
            startDate: "2025-06-01",
            endDate: "2026-01-31",
            continent: "European",
            description: "Organized by the European Olympic Committees, featuring multiple sports similar to the Olympic Games." 
        },
        {
            id: "4",
            title: "European Olympic - Olympic Games (Winter)",
            startDate: "2024-08-21",
            endDate: "2024-09-29",
            continent: "European",
            description: "Major football tournament held every four years." 
        },
        {
            id: "5",
            title: "Pacific Games",
            startDate: "2024-07-01",
            endDate: "2024-09-01",
            continent: "Oceania",
            description: "Multi-sport event for Pacific Island nations, held every four years." 
        },
        {
            id: "6",
            title: "African Games",
            startDate: "2025-11-05",
            endDate: "2025-12-29",
            continent: "African",
            description: "A multi-sport event held every four years for African countries, featuring a variety of sports." 
        },
        {
            id: "7",
            title: "Oceania Football Confederation (OFC) Nations Cup",
            startDate: "2025-03-02",
            endDate: "2025-05-04",
            continent: "Oceania",
            description: "Football tournament for countries in Oceania." 
        },
        {
            id: "8",
            title: "Antarctic Football Cup:",
            startDate: "2024-12-01",
            endDate: "2025-03-01",
            continent: "Antarctic",
            description: "A friendly football tournament played among the research stations in Antarctica." 
        },
        {
            id: "9",
            title: "South American Games",
            startDate: "2024-06-01",
            endDate: "2024-08-01",
            continent: "South American",
            description: "A regional multi-sport event held every four years, featuring sports from South American countries." 
        },
        {
            id: "10",
            title: "Pan American Games",
            startDate: "2024-08-21",
            endDate: "2024-11-15",
            continent: "North American",
            description: "Multi-sport event for countries in North America, Central America, South America, and the Caribbean, held every four years." 
        }
    ]
    return events.sort(compareByStartDate);
}

export const compareByStartDate = (a: Event, b: Event) => {
    if (a.startDate < b.startDate) {
        return -1;
    }
    if (a.startDate > b.startDate) {
        return 1;
    }
    return 0;
}

export const filterEventsByContinent = (searchTerm: string): Event[] => {
    const events = getCompetitionEvents();
    // Convert search term to lowercase for case-insensitive matching
    const searchTermLower = searchTerm.toLowerCase();

    // Filter events based on continent matching the search term
    return events.filter(event => event.continent.toLowerCase().includes(searchTermLower));
}