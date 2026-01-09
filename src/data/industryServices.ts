import { faRocket, faMicrochip, faShieldHalved, faSatelliteDish, faGaugeHigh, faWaveSquare } from '@fortawesome/free-solid-svg-icons';

export const industryServices = {
  "missile-ballistic-checkout": {
    title: "Missile & Ballistic Checkout",
    category: "Aerospace & Defence",
    icon: faRocket,
    description: "NI-based automated checkout systems for pre-launch validation of ballistic and tactical munitions. We ensure every subsystem—from guidance to propulsion—is mission-ready.",
    features: ["Pre-Launch Safety Interlocks", "Ignition & Abort Logic", "High-Speed Telemetry Sync", "Battery & Power Management"],
    techStack: "LabVIEW Real-Time + PXI Chassis",
    imageAlt: "Missile System Interface"
  },
  "rocket-motor-test-systems": {
    title: "Rocket Motor Test Systems",
    category: "Aerospace & Defence",
    icon: faGaugeHigh,
    description: "Static fire test stands designed to handle extreme vibration and thermal loads. We capture precision thrust, pressure, and strain data with microsecond synchronization.",
    features: ["Load Cell Calibration", "Cryogenic Flow Control", "Structural Strain Gauging", "High-Frequency Vibration Analysis"],
    techStack: "CompactRIO + FPGA Architecture",
    imageAlt: "Rocket Engine Test Stand"
  },
  "radar-rf-systems": {
    title: "Radar & RF Validation",
    category: "Aerospace & Defence",
    icon: faWaveSquare,
    description: "Advanced signal generation and analysis suites for EW (Electronic Warfare) and Radar validation. Supporting multi-emitter scenarios and beamforming tests.",
    features: ["Target Generation", "Pulse Parameter Analysis", "RCS Measurement Suites", "Interference Simulation"],
    techStack: "NI Vector Signal Transceivers (VST)",
    imageAlt: "RF Analysis Dashboard"
  }
  // You can add all 50+ services here in the same format
};