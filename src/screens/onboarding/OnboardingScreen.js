import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { theme } from "../../util/theme";
import OnboardingLight from "../../assets/onboarding-light.png";
import OnboardingDark from "../../assets/onboarding-dark.png";

const OnboardingScreen = ({ navigation }) => {
  const scheme = useColorScheme();
  const color = theme(scheme);

  return (
    <View style={[styles.container, { backgroundColor: color.background }]}>
      {scheme === "light" ? (
        <Image style={styles.onboardingImage} source={OnboardingLight} />
      ) : (
        <Image style={styles.onboardingImage} source={OnboardingDark} />
      )}
      <Text style={[styles.title, { color: color.text }]}>Sauté</Text>
      <Text style={[styles.description, { color: color.text }]}>
        Show off your recipes, create your own cookbook, and get better at
        cooking.
      </Text>

      <TouchableOpacity style={[styles.getStartedButton, {backgroundColor: color.button}]} onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style = {[styles.getStartedText, {color: color.buttonText}]}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  onboardingImage: {
    width: 300,
    height: 300,
    marginBottom: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
  },
  description: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
  },
  getStartedButton:{
    position: 'absolute',
    padding: 20,
    borderRadius: 20,
    bottom: '10%',
    width: '60%'
  },
  getStartedText:{
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
});
