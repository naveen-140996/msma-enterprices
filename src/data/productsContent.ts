// src/data/productsContent.ts
import { 
  faMicrochip, 
  faRobot,           // Replacement for faMechanicalArm
  faTowerBroadcast, 
  faRocket, 
  faProjectDiagram, 
  faSatelliteDish, 
  faWaveSquare, 
  faBullhorn, 
  faWind, 
  faFire             // Corrected from faFireAlt
} from '@fortawesome/free-solid-svg-icons';

export const productsContent: Record<string, any> = {
  "automated-test-equipment-ate": {
    name: "Automated Test Equipment (ATE)",
    model: "WM-ATE-SPEC-5",
    icon: faMicrochip,
    desc: "A ready-to-deploy testing platform designed for high-speed, automated functional and parametric testing of electronic devices and PCB assemblies.",
    features: [
      "Fully automated test execution using LabVIEW",
      "Mass Interconnect Interface (VPC/Pylon)",
      "Self-test & automated diagnostic routines",
      "Real-time pass/fail analytics and traceability"
    ],
    specs: {
      "Platform": "PXI / LXI Hybrid",
      "Test Points": "Up to 2048",
      "Software": "NI TestStand / LabVIEW",
      "Throughput": "120 Units/Hour",
      "Data Logging": "SQL / TDMS Secure Storage"
    }
  },

  "actuator-test-systems": {
    name: "Actuator Test Systems",
    model: "WM-ACT-PRO-X",
    icon: faRobot, // FIXED: Changed from faMechanicalArm
    desc: "Comprehensive testing solution for electromechanical actuators and control surfaces, validating performance under real operating conditions.",
    features: [
      "Closed-loop control for precision positioning",
      "High-speed dynamic response measurement",
      "Simulated load profiling and endurance testing",
      "Automatic health-index calculation"
    ],
    specs: {
      "Platform": "NI CompactRIO (cRIO)",
      "Force Range": "Up to 50kN",
      "Response Time": "< 1ms",
      "Control Loops": "Deterministic PID / FPGA",
      "Feedback": "Encoder / LVDT / Resolver"
    }
  },

  "sar-environment-simulator": {
    name: "SAR Environment Simulator",
    model: "WM-SAR-SIM-RF",
    icon: faTowerBroadcast,
    desc: "Replicates Specific Absorption Rate (SAR) conditions to test RF-emitting devices for human exposure and regulatory compliance.",
    features: [
      "Real-time RF exposure monitoring",
      "Automated power distribution analysis",
      "LabVIEW-based compliance visualization",
      "Faster certification and reduced risk"
    ],
    specs: {
      "Frequency Range": "400MHz to 6GHz",
      "Platform": "PXI Vector Signal Analysis",
      "Resolution": "0.1 dBm",
      "Standard": "FCC / ICNIRP Compliant",
      "Reporting": "Automated PDF/HTML Export"
    }
  },

  "missile-checkout-systems": {
    name: "Missile Checkout Systems",
    model: "WM-MCS-DEF-9",
    icon: faRocket,
    desc: "Mission-critical validation system to verify missile subsystems, electronics, and safety mechanisms during integration.",
    features: [
      "Step-by-step automated subsystem verification",
      "Hardware-in-the-loop (HIL) simulation",
      "Secure abort logic and safety interlocks",
      "Pre-launch sequence validation"
    ],
    specs: {
      "Platform": "Rugged PXI / cRIO",
      "Isolation": "Galvanic / Optical",
      "Safety SIL": "SIL-3 Capable",
      "Timing Precision": "10ns Hardware Sync",
      "Storage": "Encrypted SSD"
    }
  },

  "cable-harness-testers": {
    name: "Cable & Harness Testers",
    model: "WM-CHT-WIRE-A1",
    icon: faProjectDiagram,
    desc: "Automated solution for electrical cable harnesses, ensuring correct connectivity, insulation integrity, and pin configuration.",
    features: [
      "Automated continuity and leakage testing",
      "High-voltage insulation resistance checks",
      "Interactive pin-mapping visualizer",
      "Intermittent fault detection logic"
    ],
    specs: {
      "Platform": "NI cDAQ / PXI Switch",
      "Max Channels": "Up to 4096 Pins",
      "Insulation Test": "Up to 1500V DC",
      "Continuity Res": "mΩ Resolution",
      "Interface": "Modular Quick-Release"
    }
  },

  "antenna-rcs-measurement-suite": {
    name: "Antenna & RCS Measurement Suite",
    model: "WM-RCS-ANT-V2",
    icon: faSatelliteDish,
    desc: "Measurement platform for antenna characterization and Radar Cross Section (RCS) analysis, supporting development and validation.",
    features: [
      "Radiation pattern and gain analysis",
      "Real-time RCS signature measurement",
      "Precision polarization and efficiency tracking",
      "Integrated 3D polar plotting"
    ],
    specs: {
      "RF Bandwidth": "Up to 40GHz",
      "Dynamic Range": "> 100dB",
      "Platform": "NI PXI VST",
      "Phase Noise": "< -120 dBc/Hz",
      "Visualization": "3D Radiation Patterns"
    }
  },

  "multi-emitter-scenario-simulator": {
    name: "Multi-Emitter Scenario Simulator",
    model: "WM-MES-EW-10",
    icon: faWaveSquare,
    desc: "Recreates complex RF environments with multiple simultaneous emitters to validate radar and electronic warfare systems.",
    features: [
      "Independent parameter control per emitter",
      "Worst-case multi-signal scenario generation",
      "Real-time signal monitoring and logging",
      "Synchronized PXI and cRIO control"
    ],
    specs: {
      "Emitter Count": "Up to 64 Simultaneous",
      "Modulation": "Chirp, Pulse, Hopping, CW",
      "Sync Jitter": "< 1ns",
      "Frequency Range": "DC to 26.5 GHz",
      "Architecture": "FPGA-Based SDR"
    }
  },

  "acoustic-emission-acquisition-analysis-system": {
    name: "Acoustic Emission Acquisition & Analysis System",
    model: "WM-AEA-STR-X",
    icon: faBullhorn,
    desc: "Real-time system for detecting and analyzing acoustic emissions in structural health monitoring and fault detection.",
    features: [
      "High-speed piezo sensor acquisition",
      "Real-time event localization (3D)",
      "Early warning for crack and leak detection",
      "Trend analysis for material degradation"
    ],
    specs: {
      "Sampling Rate": "Up to 10 MS/s per channel",
      "Platform": "PXI High-Speed Digitizers",
      "Dynamic Range": "24-bit Resolution",
      "Filters": "Adaptive Digital Bandpass",
      "Analysis": "Wavelet / FFT / Statistical"
    }
  },

  "radar-waveform-generator": {
    name: "Radar Waveform Generator",
    model: "WM-RWG-GEN-4",
    icon: faWind,
    desc: "Precision signal generation system for producing custom radar waveforms for testing and validation.",
    features: [
      "Support for chirp, pulse, and custom waveforms",
      "Deterministic timing and synchronization",
      "LabVIEW-based on-the-fly configuration",
      "Hardware-timed waveform sequencing"
    ],
    specs: {
      "Platform": "NI PXI Arbitrary Waveform Gen",
      "DAC Resolution": "16-bit",
      "Update Rate": "Up to 2.5 GS/s",
      "Memory": "4 GB Onboard",
      "Connectivity": "Direct RF / IF Output"
    }
  },

  "pyro-firing-control-measurement-suite": {
    name: "Pyro Firing Control & Measurement Suite",
    model: "WM-PYRO-SAF-S3",
    icon: faFire, // FIXED: Changed from faFireAlt
    desc: "Safety-critical control and measurement platform for pyrotechnic firing systems, designed for controlled testing.",
    features: [
      "Deterministic sequence and timing control",
      "High-voltage safety isolation",
      "Real-time firing parameter logging",
      "Integrated emergency abort logic"
    ],
    specs: {
      "Platform": "Rugged cRIO with FPGA",
      "Current Measure": "Up to 100A Transient",
      "Isolation": "2.5kV Channel-to-Ground",
      "Timing": "100µs Deterministic Step",
      "Logging": "Fail-safe Local NVRAM"
    }
  }
};