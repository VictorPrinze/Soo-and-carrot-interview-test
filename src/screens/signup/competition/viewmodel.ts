import React, { useState, useEffect } from "react";
import { getCompetitionEvents, filterEventsByContinent } from "../../../utils/helper";
import { goBack } from "../../../services/Navigation/NavigationService";

export const viewmodel = () => {
    const [events, setEvents] = useState<Array<{
        id: string;
        title: string;
        startDate: string;
        endDate: string;
        description: string;
        continent: string;
    }>>([]);

    const [showModal, setShowModal] = useState<boolean>(false);

    const navigateToHost = (id: string) => {
        setShowModal(true);
    }

    const handleModalClick = () => {
        setShowModal(false);
    }

    const navigateBack = () => {
        goBack();
    }

    const handleEventSearch = (text: string) => {
        let events;
        if (text != "") {
            events = filterEventsByContinent(text);
        } else {
            events = getCompetitionEvents();
        }
        setEvents(events);
    }

    useEffect(() => {
        setEvents(getCompetitionEvents());
    }, []);

    return {
        navigateToHost: navigateToHost,
        handleModalClick: handleModalClick,
        showModal: showModal,
        navigateBack: navigateBack,
        events: events,
        handleEventSearch: handleEventSearch,
    }
}