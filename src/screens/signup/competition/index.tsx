import React from "react";
import {
    View,
    FlatList,
    StyleSheet,
} from "react-native";
import Icon from "../../../components/Icon/Icon";
import TextField from "../../../components/TextField/TextField";
import Searchbox from "../../../components/Searchbox/Searchbox";
import Card from "../../../components/Card/Card";
import Notification from "../../../components/Notification/Notification";
import { viewmodel } from "./viewmodel";

const CardItem = ({
    title,
    description,
    startDate,
    endDate,
    onPress,
}:{
    title: string,
    description: string,
    startDate: string,
    endDate: string,
    onPress: () => void
}) => (
    <Card
        title={title}
        description={description}
        startDate={startDate}
        endDate={endDate}
        onPress={() => onPress()}
    />
);

const CompetitionScreen = () => {
    const {
        navigateBack,
        navigateToHost,
        events,
        showModal,
        handleModalClick,
        handleEventSearch,
    } = viewmodel();

    return (
        <View style={styles.container}>
            <Notification
                message="Great to have you here"
                title="Welcome to Soo"
                onClose={() => handleModalClick()}
                onGotIt={() => handleModalClick()}
                isVisible={showModal}
            />
            {!showModal && (
                <View style={styles.header}>
                    <View style={styles.icon}>
                        <Icon 
                            icon="arrow-back"
                            color="#000"
                            variant="filled"
                            variantColor="#F0F0F0"
                            isPressable
                            size={20}
                            onPress={() => navigateBack()}
                        />
                    </View>
                    <View style={styles.searchbox}>
                        <Searchbox 
                            placeholder="Search"
                            onChangeText={(e) => handleEventSearch(e)}
                        />
                    </View>
                </View>
            )}
            {!showModal && (
                <View style={styles.formContainer}>
                    <View>
                        <TextField
                            text="Competition"
                            size="bg"
                            isBold
                            color="#000"
                        />
                    </View>
                    <View>
                        <TextField
                            text="An account is needed per host. If you already have an account for the host of competition you want to signup, you can login and register."
                            size={15}
                            color="#000"
                        />
                    </View>
                    <View style={styles.cardList}>
                        <FlatList
                            data={events}
                            keyExtractor={(item) => item.id}
                            renderItem={
                                ({ item }) => 
                                    <CardItem
                                        title={item.title}
                                        description={item.description}
                                        startDate={item.startDate}
                                        endDate={item.endDate}
                                        onPress={() => navigateToHost(item.id)}
                                    />
                            }
                            contentContainerStyle={styles.list}
                        />
                    </View>
                </View>
            )}
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingRight: 20,
      paddingTop: 10,
      paddingLeft: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 80,
        paddingTop: 20,
        marginBottom: 20,
    },
    icon: {
        marginRight: 20,
    },
    searchbox: {
        minWidth: 300,
    },
    formContainer: {
        flex: 1,
    },
    cardList: {
        flex: 1,
        padding: 10,
        marginTop: 20,
    },
    list: {
        flexGrow: 1,
    },
});

export default CompetitionScreen;