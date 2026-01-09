import { faRocket,faMicroscope, faChargingStation,faLeaf, faFlaskVial,faStethoscope,faHeartPulse, faXRay, faHospitalUser,faWalking, faDatabase, faVials,faShieldVirus, faBolt,faBoreHole, faTachometerAlt,faWandMagicSparkles, faEye,faTruckFast,faFire,faNetworkWired,faIndustry,faSatellite, faCircleNodes, faMicrochip, faShieldHalved, faSatelliteDish, faGaugeHigh, faWaveSquare } from '@fortawesome/free-solid-svg-icons';

export const subServicesContent = {
"missile-ballistic-checkout": {
  title: "Missile & Ballistic Checkout",
  category: "Aerospace & Defence",
  icon: faRocket,
  // Detailed Overview for Hero section
  desc: "Providing complete electrical, functional, and system-level verification of missile and launch vehicle subsystems. Critical for validating mission readiness, detecting latent faults, and ensuring safe interaction between missile hardware and ground support equipment before execution.",
  
  // Sidebar Architecture
  tech: "cRIO + PXI + cDAQ Architecture",

  // Maps to Section 2: Technical Breakdown (The numbered 01-04 sections)
  categories: [
    {
      label: "Core Capabilities",
      content: "Complete electrical and functional checkout for ballistic missiles. We specialize in umbilical interface and ground power transition testing, telemetry health monitoring, and actuator testing for TVC, fins, and servo mechanisms. Includes critical pyro line, squib, and ignition circuit verification with redundant control logic."
    },
    {
      label: "LabVIEW-Based Automation",
      content: "LabVIEW serves as the central platform for automated test execution and deterministic control. It manages safety interlocks, inhibit logic, and abort handling while performing real-time continuity, insulation resistance (harness), and high-speed telemetry monitoring with automated pass/fail reporting."
    },
    {
      label: "Hardware Platforms",
      content: "Tiered NI hardware deployment: CompactDAQ (cDAQ) for electrical/sensor measurements (Voltage, Strain, Temp); CompactRIO (cRIO) for deterministic real-time control and ignition interlocks; PXI Systems for high-speed, synchronized telemetry simulation and timing-critical testing."
    },
    {
      label: "System Design & Validation",
      content: "Our modular architecture supports Hardware-in-the-Loop (HIL) for safe dry runs, hardware abstraction for future upgrades, and fault injection for failure validation. Systems are fully compliant with FAT/SAT standards and provide secure, traceable data logging for every test run."
    }
  ],

  // Maps to Sidebar Operational Specs
  points: [
    "Pre-launch Pre-flight Validation",
    "TVC & Fin Actuator Dynamics",
    "Pyro/Squib Ignition Circuit Testing",
    "Redundant Control & Abort Logic",
    "Telemetry & Real-time Health Monitoring",
    "Harness Insulation Resistance Checks",
    "FAT/SAT Compliance Ready"
  ],
  
  imageAlt: "Missile Functional Test Stand"
},
 "rocket-motor-test-systems": {
  title: "Rocket Motor Test Systems",
  category: "Aerospace & Defence",
  icon: faFire, // Ensure faFire is imported
  // Detailed Overview
  desc: "High-performance ground testing and safety validation for solid and liquid rocket motors. Our systems capture high-energy transient events during ignition and burn while maintaining strict deterministic control over hazardous test facilities.",
  
  // Sidebar Architecture
  tech: "cRIO + PXI + High-Speed DAQ",

  // Section 2: Technical Breakdown (Numbered 01-04)
  categories: [
    {
      label: "Propulsion Core Capabilities",
      content: "Engineering of solid and liquid rocket motor test stands for performance evaluation and safety validation. We specialize in precision measurement of thrust, chamber pressure, and temperature, utilizing high-speed synchronized data acquisition to verify propulsion performance before qualification and flight."
    },
    {
      label: "LabVIEW-Based Execution",
      content: "Full test automation and analysis including automated ignition sequencing and real-time monitoring of thrust-time and pressure-time profiles. LabVIEW handles online calculation of ignition delay, burn time, peak/average thrust, and enforces strict safety interlocks with millisecond-accurate abort logic."
    },
    {
      label: "Integrated Hardware Strategy",
      content: "Modular NI hardware deployment for high-energy testing: CompactDAQ for multi-channel sensor logging (Load cells, pressure, heat-flux); CompactRIO for deterministic control of valves, actuators, and emergency shutdown; PXI Systems for high-speed diagnostics and synchronized transient capture."
    },
    {
      label: "Lifecycle Analysis & Calibration",
      content: "End-to-end testing workflow featuring sensor continuity checks, load cell zeroing, and multi-sensor calibration. Our systems support dry-run simulation modes for safety validation and provide post-test qualification reporting through automated burn duration and impulse calculations."
    }
  ],

  // Sidebar Operational Specs
  points: [
    "High-Energy Transient Capture",
    "Thrust-Time & Pressure-Time Profiles",
    "Solid & Liquid Motor Test Stands",
    "Deterministic Emergency Shutdown",
    "Multi-Channel Sensor Calibration",
    "Real-time Ignition Delay Analysis",
    "Hazardous Facility Control Logic"
  ],
  
  imageAlt: "Rocket Motor Static Fire Test Bench"
},
"radar-rf-systems": {
  title: "Radar & RF Systems",
  category: "Aerospace & Defence",
  icon: faSatelliteDish, // Ensure faSatelliteDish is imported
  // Detailed Overview
  desc: "Functional validation and performance characterization of radar, RF, and microwave subsystems. We enable controlled, repeatable testing for missile guidance, surveillance, and satellite communication systems under realistic operational conditions.",
  
  // Sidebar Architecture
  tech: "NI PXI VST + Vector Signal Logic",

  // Section 2: Technical Breakdown (Numbered 01-04)
  categories: [
    {
      label: "RF Core Capabilities",
      content: "Complete radar checkout and validation including waveform generation and high-fidelity signal analysis. We specialize in antenna characterization, beam pattern measurements, gain/phase analysis, and RF signal recording for surveillance and tracking subsystems."
    },
    {
      label: "LabVIEW RF Control",
      content: "Automated test sequencing for frequency, power, bandwidth, and modulation control. LabVIEW enables real-time RF monitoring, automated waveform capture, and the calculation of critical performance parameters with live graphical visualization and MIL-STD reporting."
    },
    {
      label: "Advanced Hardware Platforms",
      content: "Utilizing NI PXI RF Systems featuring Vector Signal Transceivers (VST), RF generators, and digitizers for high-speed signal processing. CompactRIO manages real-time synchronization and interlocks, while CompactDAQ handles environmental monitoring of the RF assembly."
    },
    {
      label: "HIL & Validation Design",
      content: "Implementation of Radar Hardware-in-the-Loop (HIL) testing using time-synchronized measurements and RF loopback architectures. Our modular designs support fault simulation and automated channel calibration to ensure repeatable validation procedures."
    }
  ],

  // Sidebar Operational Specs
  points: [
    "Radar Waveform Capture & Replay",
    "Beam Pattern & Phase Measurement",
    "Vector Signal Transceiver (VST) Logic",
    "RF Loopback & Fault Simulation",
    "Time-Synchronized Measurements",
    "Antenna Gain & Characterization",
    "High-Speed RF Signal Recording"
  ],
  
  imageAlt: "Radar RF Test Bench with VST Architecture"
},

"satellite-satcom": {
  title: "Satellite & SATCOM Systems",
  category: "Aerospace & Defence",
  icon: faSatellite, // Ensure faSatellite is imported
  // Detailed Overview
  desc: "End-to-end functional verification and integration testing of satellite subsystems and ground segment infrastructure. We ensure reliable operation across payload, RF, and telemetry domains for both space and ground infrastructure.",
  
  // Sidebar Architecture
  tech: "PXI + cRIO Hybrid SATCOM Suite",

  // Section 2: Technical Breakdown (Numbered 01-04)
  categories: [
    {
      label: "Payload & Subsystem Core",
      content: "Complete satellite subsystem checkout and ground segment payload testing. We specialize in RF chain validation, modem link testing, and the verification of DVB-S2 / DVB-S2X / RCS SATCOM hubs, ensuring high-integrity communication across the space segment."
    },
    {
      label: "LabVIEW-Based Automation",
      content: "Centralized automation for real-time Telemetry, Tracking & Command (TT&C) monitoring. LabVIEW handles complex test sequencing, RF/baseband equipment control, and detailed link performance analysis with automated report distribution and secure data archiving."
    },
    {
      label: "Hardware Infrastructure",
      content: "Leveraging PXI RF Systems for signal generation and loopback testing. CompactRIO manages real-time sequencing and simulator interfaces, while CompactDAQ provides high-precision environmental monitoring (Power, Temp) of the satellite assembly during integration."
    },
    {
      label: "Validation & Reporting",
      content: "Implementing end-to-end payload testing with RF attenuation and fault simulation. Our systems feature time-synchronized measurements and automated PDF/Excel reporting, ensuring full traceability and security for mission-critical satellite data."
    }
  ],

  // Sidebar Operational Specs
  points: [
    "TT&C Real-time Health Monitoring",
    "DVB-S2X / RCS Hub Validation",
    "RF Chain & Modem Link Testing",
    "Payload Fault Simulation Logic",
    "Ground Segment Infrastructure Prep",
    "Time-Synchronized Measurements",
    "Secure Mission Data Archiving"
  ],
  
  imageAlt: "Satellite Ground Station and Payload Test Environment"
},"simulation-emulation": {
  title: "Simulation & Environment Emulation",
  category: "Aerospace & Defence",
  icon: faCircleNodes, 
  // Detailed Overview
  desc: "Replicating real-world mission and operational environments for aerospace and defence platforms. We enable safe, repeatable, and cost-effective testing through sensor emulation and Hardware-in-the-Loop (HIL) architectures before hardware deployment.",
  
  // Sidebar Architecture
  tech: "FPGA-Based HIL Architecture",

  // Section 2: Technical Breakdown (Numbered 01-04)
  categories: [
    {
      label: "Mission Core Capabilities",
      content: "Complete mission and scenario simulation including sensor, payload, and avionics emulation. We specialize in Hardware-in-the-Loop (HIL) testing and Digital Twin-based validation, allowing for rigorous stress testing and fault injection without risking expensive flight hardware."
    },
    {
      label: "LabVIEW-Based Emulation",
      content: "LabVIEW enables real-time scenario and profile generation for closed-loop HIL execution. The software manages high-fidelity sensor/actuator signal emulation, boundary condition testing, and synchronized data acquisition to analyze system response under failure states."
    },
    {
      label: "Deterministic Hardware Platforms",
      content: "Utilizing PXI Systems for high-speed signal generation and radar environment simulation. CompactRIO provides the deterministic real-time engine for closed-loop control, while CompactDAQ handles sensor-level emulation and monitoring for secondary subsystems."
    },
    {
      label: "System Design & Integration",
      content: "Our systems feature FPGA-based deterministic execution and modular simulation models. We implement configurable fault injection and ensure a seamless transition from pure simulation to real hardware testing, maintaining signal integrity across the testing lifecycle."
    }
  ],

  // Sidebar Operational Specs
  points: [
    "Closed-Loop HIL Execution",
    "Digital Twin-Based Validation",
    "FPGA-Driven Signal Emulation",
    "Configurable Fault Injection",
    "Avionics & Payload Simulation",
    "Boundary Condition Stress Testing",
    "High-Fidelity Sensor Replay"
  ],
  
  imageAlt: "HIL Simulation and Hardware Emulation Rack"
},
"data-acquisition-control": {
  title: "Data Acquisition & Control Systems",
  category: "Aerospace & Defence",
  icon: faCircleNodes, 
  // Detailed Overview
  desc: "The fundamental backbone of aerospace and defence testing. We provide high-accuracy measurement, deterministic control, and reliable monitoring of mission-critical parameters through high-channel-count architectures and FPGA-based safety logic.",
  
  // Sidebar Architecture
  tech: "Distributed NI-DAQ Architecture",

  // Section 2: Technical Breakdown (Numbered 01-04)
  categories: [
    {
      label: "DAQ Core Capabilities",
      content: "Engineering of high-channel-count DAQ systems supporting distributed measurement architectures. We specialize in secure data logging, high-fidelity playback, and the integration of AI-based anomaly detection to monitor mission-critical parameters across complex aerospace platforms."
    },
    {
      label: "LabVIEW Control & Monitoring",
      content: "LabVIEW enables high-speed multi-channel acquisition and deterministic control loops. The software manages automated test sequencing, online calculation of derived parameters, and rigorous limit checking with integrated alarm handling and real-time event logging."
    },
    {
      label: "Hardware Ecosystem",
      content: "Modular hardware deployment utilizing CompactDAQ for precision sensor measurement (Voltage, Strain, Load cells); CompactRIO for real-time safety interlocks and closed-loop actuation; and PXI Systems for high-speed synchronized acquisition and dynamic signal analysis."
    },
    {
      label: "Visualization & Analysis",
      content: "Our systems provide real-time multi-channel plotting and historical trend analysis. We implement automated PDF and Excel report generation with secure data archival protocols, ensuring that all test data is traceable, shareable, and ready for qualification audits."
    }
  ],

  // Sidebar Operational Specs
  points: [
    "High-Channel-Count Sync",
    "FPGA-Based Deterministic Control",
    "Distributed DAQ Architectures",
    "AI-Driven Anomaly Detection",
    "Real-time Safety Interlocks",
    "Secure Data Logging & Replay",
    "Automated Qualification Reports"
  ],
  
  imageAlt: "Distributed Data Acquisition and Real-time Control Network"
},// URL: /services/smart-manufacturing-automation
  "smart-manufacturing": {
    title: "Smart Manufacturing & Industrial Automation",
    category: "Industry 4.0",
    icon: faIndustry, // Ensure faIndustry is imported
    desc: "Transitioning factories from reactive operations to data-driven, autonomous environments. We integrate real-time automation and AI to improve throughput, reduce downtime, and enhance product quality.",
    tech: "cRIO + Industrial IoT Gateway",
    categories: [
      { 
        label: "Industry 4.0 Capabilities", 
        content: "Real-time acquisition of machine and sensor data with deterministic control of robots and PLCs. We enable full visibility through process monitoring, signal conditioning, and event detection integrated with live dashboards." 
      },
      { 
        label: "Advanced Predictive Analytics", 
        content: "Deployment of machine-learning models for predictive maintenance and process optimization. Our systems detect anomalies in production data and monitor energy usage for comprehensive efficiency analysis." 
      },
      { 
        label: "Industrial Hardware Platforms", 
        content: "Utilizing NI CompactRIO for deterministic automation, CompactDAQ for high-accuracy sensor acquisition, and PXI systems for high-speed analytics across automotive, electronics, and pharmaceutical lines." 
      },
      { 
        label: "System Design & Safety", 
        content: "Modular architectures that separate acquisition from analytics. We implement fail-safe logic, manual override mechanisms, and simulation-based dry runs to optimize production without risking downtime." 
      }
    ],
    points: [
      "Predictive Maintenance AI",
      "Deterministic Robot/PLC Control",
      "Energy Efficiency Monitoring",
      "Machine-to-Cloud Integration",
      "Anomaly Detection Algorithms",
      "Fail-Safe Automation Logic",
      "Live Production Dashboards"
    ],
    imageAlt: "Smart Factory Automation Dashboard and cRIO Controller"
  },
  // URL: /services/digital-twin-systems
  "digital-twin-systems": {
    title: "Digital Twin Systems",
    category: "Industry 4.0",
    icon: faCircleNodes, // Ensure faCircleNodes is imported
    desc: "Creating virtual replicas of physical assets and processes, continuously synchronized with real-world data. We enable organizations to simulate, monitor, and optimize performance through high-fidelity digital twins without interrupting live operations.",
    tech: "PXI Simulation + Real-time Sync",
    categories: [
      { 
        label: "Digital Synchronization", 
        content: "We implement real-time synchronization between physical hardware and digital models. This includes live sensor data integration for continuous simulation and closed-loop control interfacing to ensure the virtual replica perfectly mirrors the asset's state." 
      },
      { 
        label: "Advanced Predictive Modeling", 
        content: "Leveraging AI-driven fault prediction and scenario evaluation. Our systems allow for complex 'what-if' analysis, enabling performance optimization and predictive maintenance based on simulated asset behavior under extreme conditions." 
      },
      { 
        label: "Simulation Hardware", 
        content: "Utilizing high-performance NI PXI systems for heavy computation and real-time simulation. NI CompactRIO and CompactDAQ platforms serve as the edge nodes, providing the raw data acquisition and control necessary to feed the digital twin." 
      },
      { 
        label: "Design & Model Refinement", 
        content: "Focused on accurate physical-to-digital mapping. Our design process involves validation across multiple operating conditions and continuous model refinement to ensure accurate training environments and process optimization." 
      }
    ],
    points: [
      "Real-time Physical-Digital Sync",
      "Scenario & 'What-if' Analysis",
      "Predictive Asset Modeling",
      "AI-Driven Fault Prediction",
      "Closed-loop System Interfacing",
      "High-Fidelity Virtual Training",
      "Continuous Model Calibration"
    ],
    imageAlt: "Digital Twin Architecture showing real-time sensor feedback and 3D process modeling"
  },// URL: /services/industrial-iot
  "industrial-iot": {
    title: "Industrial Internet of Things (IIoT)",
    category: "Industry 4.0",
    icon: faNetworkWired, // Ensure faNetworkWired is imported
    desc: "Unifying machines, sensors, and systems into a connected ecosystem. Our IIoT solutions enable real-time monitoring and intelligent decision-making across global facilities, forming the backbone of modern smart factories.",
    tech: "Edge cRIO + Cloud Analytics",
    categories: [
      { 
        label: "Connected Ecosystem", 
        content: "We specialize in edge-level data acquisition and secure aggregation from distributed assets. Our systems provide live dashboards, instant alerts, and seamless integration with cloud platforms and AI services for enterprise-wide visibility." 
      },
      { 
        label: "Edge Intelligence", 
        content: "Deployment of adaptive control and process optimization at the edge. We utilize anomaly detection and trend analysis to turn raw machine data into predictive maintenance insights before it even reaches the cloud." 
      },
      { 
        label: "IIoT Infrastructure", 
        content: "Using NI CompactRIO and CompactDAQ as intelligent edge nodes for processing, and PXI systems for high-speed diagnostics. We integrate IoT-enabled sensors and gateways to bridge the gap between OT and IT." 
      },
      { 
        label: "Network Reliability", 
        content: "Modular and scalable network design focused on latency, reliability, and data integrity. Our validation process ensures connectivity across complex industrial environments and secure data transmission for supply chain optimization." 
      }
    ],
    points: [
      "Edge-to-Cloud Data Pipelines",
      "Secure Distributed Aggregation",
      "Adaptive Process Optimization",
      "Real-time Enterprise Dashboards",
      "OT/IT Protocol Integration",
      "Predictive Asset Monitoring",
      "Scalable IoT Network Design"
    ],
    imageAlt: "IIoT Architecture showing Edge Controllers and Cloud Integration"
  },// URL: /services/predictive-maintenance-systems
  "predictive-maintenance-systems": {
    title: "Predictive Maintenance Systems",
    category: "Industry 4.0",
    icon: faShieldHalved, // Ensure faShieldHalved is imported
    desc: "Eliminating unplanned downtime by anticipating equipment failures before they occur. We transition maintenance from reactive to condition-based through continuous sensor analysis and edge-deployed AI models.",
    tech: "cRIO Edge AI + Vibration Analysis",
    categories: [
      { 
        label: "Proactive Health Monitoring", 
        content: "High-speed acquisition of vibration, temperature, current, and load data. Our systems provide real-time health monitoring of assets, generating actionable insights and maintenance alerts before mechanical degradation leads to failure." 
      },
      { 
        label: "Advanced Failure Analytics", 
        content: "Deployment of machine learning models for failure prediction and time-series analysis of degradation patterns. We specialize in early anomaly detection within operational parameters to identify the 'P-F Interval' of industrial equipment." 
      },
      { 
        label: "Edge-to-Analytic Hardware", 
        content: "Utilizing NI CompactRIO and CompactDAQ for high-speed sensor monitoring and localized edge analytics. PXI systems are deployed for advanced data processing and complex modeling of rotating machinery and robotic cells." 
      },
      { 
        label: "Validation & Design", 
        content: "Rigorous system design involving sensor calibration and algorithm performance validation. We ensure real-time response and low-latency testing to verify that fault detection triggers occur within mission-critical timeframes." 
      }
    ],
    points: [
      "AI/ML-Based Fault Prediction",
      "High-Speed Vibration Analysis",
      "P-F Interval Identification",
      "Edge-Deployed Health Models",
      "Time-Series Degradation Trends",
      "Rotating Machinery Diagnostics",
      "Automated Maintenance Alerts"
    ],
    imageAlt: "Predictive Maintenance Dashboard showing Vibration Spectra and Asset Health Score"
  },// URL: /services/robotics-cobot-systems
  "robotics-cobot-systems": {
    title: "Robotics & Collaborative Robots (Cobots)",
    category: "Industry 4.0",
    icon: faMicrochip, 
    desc: "Automating repetitive and high-precision tasks while enabling safe human-robot collaboration. Our solutions integrate multi-axis motion control with advanced sensor logic to increase productivity and workplace safety.",
    tech: "cRIO Real-Time Motion Control",
    categories: [
      { 
        label: "Robotic Control Capabilities", 
        content: "Expertise in multi-axis robot and cobot control systems. We specialize in sensor integration for collision detection, event-driven automation, and the management of high-precision task execution in complex collaborative workstations." 
      },
      { 
        label: "AI & Vision Analytics", 
        content: "Implementation of AI-based motion planning and vision-guided inspection. Our systems utilize path optimization and task scheduling to minimize cycle times while enabling autonomous navigation and precision machining." 
      },
      { 
        label: "Motion Hardware Platforms", 
        content: "Direct integration with industrial robots using NI CompactRIO for real-time motion control and I/O. We incorporate force sensors, safety scanners, and high-speed cameras to create a responsive and safe robotic ecosystem." 
      },
      { 
        label: "Safety & Validation Design", 
        content: "Rigorous motion calibration and functional safety integration. Every system undergoes extensive task dry-run validation and simulation to ensure fail-safe performance before deployment on the assembly floor." 
      }
    ],
    points: [
      "Multi-Axis Motion Synchronization",
      "Collision Detection & Safety Logic",
      "Vision-Guided Path Planning",
      "Human-Machine Interaction (HMI)",
      "Cycle-Time Optimization AI",
      "Force-Torque Sensor Integration",
      "Functional Safety (ISO 10218) Ready"
    ],
    imageAlt: "Collaborative Robot workstation with NI cRIO control and safety laser scanner integration"
  },// URL: /services/smart-energy-systems
  "smart-energy-systems": {
    title: "Smart Energy Systems",
    category: "Industry 4.0",
    icon: faBolt, // Ensure faBolt is imported
    desc: "Optimizing energy consumption and sustainability across industrial operations. We provide real-time visibility into power parameters and enable data-driven strategies for load balancing and carbon footprint reduction.",
    tech: "PXI Power Quality Suite",
    categories: [
      { 
        label: "Energy Monitoring Core", 
        content: "Real-time monitoring of energy parameters including voltage, current, power factor, and harmonic distortion. We integrate smart meters and sensors to provide automated reporting and live dashboards for comprehensive facility visibility." 
      },
      { 
        label: "AI-Driven Optimization", 
        content: "Deployment of AI-based consumption prediction and peak demand management. Our analytics engine performs automated load balancing and electrical fault detection, helping plants reduce costs and manage energy-intensive processes dynamically." 
      },
      { 
        label: "High-Performance Platforms", 
        content: "Utilizing NI PXI Systems for high-speed power quality analysis and transient capture. CompactRIO and CompactDAQ platforms serve as distributed monitoring nodes for continuous asset-level energy tracking and control." 
      },
      { 
        label: "Design & Fail-Safe Validation", 
        content: "Our system design includes rigorous network calibration and simulation of optimization strategies. We implement real-time alerting and fail-safe validation to ensure grid stability and operational continuity during peak demand periods." 
      }
    ],
    points: [
      "AI Consumption Prediction",
      "Peak Demand Load Balancing",
      "Power Quality & Harmonic Analysis",
      "Real-time Carbon Tracking",
      "Smart Grid Integration Ready",
      "Automated Utility Reporting",
      "Fault Detection in Electrical Loops"
    ],
    imageAlt: "Industrial Energy Management Dashboard showing real-time load distribution and efficiency metrics"
  },

 
  "digital-quality-inspection": {
    title: "Digital Quality Inspection",
    category: "Industry 4.0",
    icon: faEye, // Ensure faEye is imported
    desc: "Automating product grading and defect detection to eliminate manual error. Our systems leverage high-speed imaging and AI/ML models to ensure consistent quality across electronics, pharmaceuticals, and manufacturing lines.",
    tech: "Vision-AI + FPGA Processing",
    categories: [
      { 
        label: "Inspection Capabilities", 
        content: "Real-time acquisition of 2D and 3D industrial imagery. We automate defect detection and product grading through AI/ML models, providing live dashboards and automated reporting for immediate production-line feedback." 
      },
      { 
        label: "Vision-AI Analytics", 
        content: "Advanced multi-feature analysis including size, shape, color, and texture verification. Our systems implement OCR for label/code verification and integrate Statistical Process Control (SPC) to monitor quality trends over time." 
      },
      { 
        label: "Hardware Ecosystem", 
        content: "Integration of 2D/3D industrial cameras with NI CompactRIO for FPGA-based high-speed image processing. We synchronize robotic sorting and handling systems to isolate defective parts with millisecond latency." 
      },
      { 
        label: "Design & Line Integration", 
        content: "Precision camera and sensor calibration paired with rigorous algorithm accuracy validation. We conduct extensive dry-run testing to ensure seamless integration into existing high-speed production lines without throughput degradation." 
      }
    ],
    points: [
      "AI/ML-Based Defect Detection",
      "3D Surface Topography Mapping",
      "OCR Label & Code Verification",
      "Statistical Process Control (SPC)",
      "High-Speed Robotic Sorting",
      "FPGA Image Pre-processing",
      "Automated Quality Dashboards"
    ],
    imageAlt: "Automated machine vision inspection system detecting PCB defects"
  },// URL: /services/supply-chain-automation
  "supply-chain-automation": {
    title: "Supply Chain Automation",
    category: "Industry 4.0",
    icon: faTruckFast, // Ensure faTruckFast is imported
    desc: "Optimizing material flow and inventory through high-speed automation and predictive analytics. We integrate real-time tracking and automated handling systems to provide full visibility across the modern supply chain.",
    tech: "Distributed IoT + Robotic Logistics",
    categories: [
      { 
        label: "Warehouse Intelligence", 
        content: "Real-time monitoring of inventory and warehouse environments. We integrate automated material handling systems with sensor-based tracking to ensure 100% visibility into asset movement and storage efficiency." 
      },
      { 
        label: "Logistics Analytics", 
        content: "Deployment of demand forecasting and logistics optimization models. Our systems perform storage and retrieval efficiency analysis and use anomaly detection to identify bottlenecks in complex supply chain workflows." 
      },
      { 
        label: "Automation Hardware", 
        content: "Leveraging RFID, barcode scanners, and IoT sensors for data collection. We utilize NI CompactRIO and CompactDAQ for warehouse automation monitoring, interfacing directly with robotic handling and conveyor systems." 
      },
      { 
        label: "System Design & Simulation", 
        content: "Modular network validation and comprehensive workflow simulation. We optimize the logic of automated warehouses through dry-run testing, ensuring that alerting and reporting systems are verified before live deployment." 
      }
    ],
    points: [
      "Real-time Inventory Tracking",
      "Automated Material Handling",
      "Predictive Demand Forecasting",
      "RFID & IoT Sensor Networks",
      "Logistics Bottleneck Detection",
      "Robotic Storage & Retrieval",
      "Workflow Efficiency Analysis"
    ],
    imageAlt: "Automated warehouse logistics system with real-time tracking and robotic sorting"
  }, 

  "smart-energy-systems-": {
    title: "Smart Energy Systems",
    category: "Industry 4.0",
    icon: faBolt, // Ensure faBolt is imported
    desc: "Optimizing energy consumption and sustainability across industrial operations. We provide real-time visibility into power parameters and enable data-driven strategies for load balancing and carbon footprint reduction.",
    tech: "PXI Power Quality Suite",
    categories: [
      { 
        label: "Energy Monitoring Core", 
        content: "Real-time monitoring of energy parameters including voltage, current, power factor, and harmonic distortion. We integrate smart meters and sensors to provide automated reporting and live dashboards for comprehensive facility visibility." 
      },
      { 
        label: "AI-Driven Optimization", 
        content: "Deployment of AI-based consumption prediction and peak demand management. Our analytics engine performs automated load balancing and electrical fault detection, helping plants reduce costs and manage energy-intensive processes dynamically." 
      },
      { 
        label: "High-Performance Platforms", 
        content: "Utilizing NI PXI Systems for high-speed power quality analysis and transient capture. CompactRIO and CompactDAQ platforms serve as distributed monitoring nodes for continuous asset-level energy tracking and control." 
      },
      { 
        label: "Design & Fail-Safe Validation", 
        content: "Our system design includes rigorous network calibration and simulation of optimization strategies. We implement real-time alerting and fail-safe validation to ensure grid stability and operational continuity during peak demand periods." 
      }
    ],
    points: [
      "AI Consumption Prediction",
      "Peak Demand Load Balancing",
      "Power Quality & Harmonic Analysis",
      "Real-time Carbon Tracking",
      "Smart Grid Integration Ready",
      "Automated Utility Reporting",
      "Fault Detection in Electrical Loops"
    ],
    imageAlt: "Industrial Energy Management Dashboard showing real-time load distribution and efficiency metrics"
  },
  // URL: /services/pipeline-monitoring-control
  "pipeline-monitoring-control": {
    title: "Pipeline Monitoring & Control",
    category: "Oil & Gas",
    icon: faWandMagicSparkles, // Replace with faOilCan or faDroplet if available
    desc: "Ensuring safe and efficient transportation across distributed networks. We provide continuous visibility into operating conditions, enabling early detection of leaks, pressure deviations, and equipment degradation to minimize environmental risk.",
    tech: "Distributed cRIO RTU Architecture",
    categories: [
      { 
        label: "Real-Time Infrastructure", 
        content: "High-accuracy acquisition of pressure, flow, and temperature data. We specialize in the control of pumps, valves, and compressors, integrating seamlessly with SCADA systems and remote telemetry units (RTUs) for enterprise-wide monitoring." 
      },
      { 
        label: "Advanced Flow Analytics", 
        content: "Implementation of AI-based leak and blockage detection. Our analytics engine provides flow optimization to reduce energy consumption and pressure losses, alongside trend analysis for identifying mechanical fouling or degradation." 
      },
      { 
        label: "Edge Control Hardware", 
        content: "Utilizing NI CompactRIO for deterministic real-time control and edge processing at remote stations. CompactDAQ is deployed for precision sensor acquisition, interfacing with industrial transmitters and distributed PLCs." 
      },
      { 
        label: "Safety & Integrity Design", 
        content: "Focused on fail-safe logic and emergency shutdown (ESD) validation. We conduct extensive simulation of abnormal flow scenarios and end-to-end latency testing to ensure rapid response to unsafe pipeline conditions." 
      }
    ],
    points: [
      "AI-Based Leak Detection",
      "Flow Assurance & Optimization",
      "Remote Telemetry (RTU) Integration",
      "Emergency Shutdown (ESD) Logic",
      "Pump & Compressor Health Monitoring",
      "SCADA System Interfacing",
      "Distributed Pressure Profiling"
    ],
    imageAlt: "Pipeline monitoring dashboard showing pressure gradients and leak detection alerts"
  },
  // URL: /services/drilling-exploration-systems
  "drilling-exploration-systems": {
    title: "Drilling & Exploration Systems",
    category: "Oil & Gas",
    icon: faBoreHole, // Ensure faBoreHole or faCompass is imported
    desc: "Optimizing drilling dynamics and subsurface visibility for onshore and offshore environments. We enable operators to improve penetration rates and well integrity through real-time monitoring of critical drilling parameters.",
    tech: "Rugged cRIO + PXI Analytics",
    categories: [
      { 
        label: "Drilling Dynamics Core", 
        content: "High-fidelity data acquisition from drilling rigs, downhole tools, and surface sensors. We provide real-time monitoring of drill depth, torque, vibration, weight-on-bit (WOB), and mud flow to ensure continuous operational visibility." 
      },
      { 
        label: "Exploration Analytics", 
        content: "Integration of predictive models for drilling guidance and optimization. Our systems perform vibration/torque anomaly detection to prevent tool failure and utilize geospatial data analysis for deeper exploration insights." 
      },
      { 
        label: "Rugged Hardware Platforms", 
        content: "Deployment of NI CompactRIO for deterministic control in harsh rig environments. High-performance PXI systems handle complex seismic data processing and real-time analytics for automated drilling actuators." 
      },
      { 
        label: "Validation & Safety", 
        content: "Comprehensive calibration of downhole instrumentation and dry-run simulations of drilling scenarios. We implement rigorous fail-safe logic and emergency stop testing to protect personnel and expensive rig machinery." 
      }
    ],
    points: [
      "Real-time Weight-on-Bit (WOB) Sync",
      "Vibration & Torque Anomaly Detection",
      "Predictive Downhole Tool Maintenance",
      "Ruggedized Edge Processing (cRIO)",
      "Seismic Data Acquisition & Analysis",
      "Automated Drilling Parameter Tuning",
      "Fail-Safe Emergency Stop Protocols"
    ],
    imageAlt: "Drilling rig control room with real-time vibration and depth telemetry dashboards"
  },// URL: /services/refinery-automation
  "refinery-automation": {
    title: "Refinery Automation",
    category: "Oil & Gas",
    icon: faIndustry, // Ensure faIndustry is imported
    desc: "Enabling continuous, safe, and optimized operation of complex refining processes. We provide centralized control for distillation, cracking, and blending to maximize throughput and ensure stringent operational safety.",
    tech: "PXI + cRIO Process Suite",
    categories: [
      { 
        label: "Process Control Core", 
        content: "Real-time monitoring of temperature, pressure, flow, and chemical composition. We specialize in the precise control of reactors, heaters, and mixers, integrating seamlessly with existing SCADA and Distributed Control Systems (DCS)." 
      },
      { 
        label: "Predictive Yield Analytics", 
        content: "Deployment of AI-driven process optimization to improve product yield and quality. Our systems perform real-time anomaly detection in product streams and analyze energy efficiency to minimize operational losses." 
      },
      { 
        label: "Integrated Hardware Platforms", 
        content: "Utilizing NI CompactRIO for real-time safety logic and deterministic control. NI PXI systems provide the high-speed measurement capabilities required for advanced chemical analysis and motor drive synchronization." 
      },
      { 
        label: "Safety & Performance Validation", 
        content: "Rigorous validation of safety interlocks and emergency shutdown (ESD) protocols. Our engineering process includes control loop tuning and latency testing to ensure deterministic response during process variations." 
      }
    ],
    points: [
      "AI-Driven Process Optimization",
      "Distillation & Cracking Control",
      "Real-time Chemical Composition Analysis",
      "Safety Interlock & ESD Validation",
      "DCS & SCADA Integration",
      "Predictive Asset Maintenance",
      "Energy Loss & Efficiency Analytics"
    ],
    imageAlt: "Refinery control room dashboard showing distillation column temperatures and flow rates"
  },// URL: /services/condition-monitoring-systems
  "condition-monitoring-systems": {
    title: "Condition Monitoring Systems",
    category: "Oil & Gas",
    icon: faTachometerAlt, // Ensure faTachometerAlt is imported
    desc: "Continuous health assessment for critical oil and gas assets. We enable operators to detect early signs of failure and transition from reactive to predictive maintenance strategies through high-fidelity vibration and thermal analytics.",
    tech: "cRIO Edge AI + PXI Diagnostics",
    categories: [
      { 
        label: "Asset Health Monitoring", 
        content: "Continuous acquisition of vibration, temperature, current, and strain data. Our systems provide real-time dashboards with automated health indicators and alarm generation for pumps, compressors, turbines, and motors." 
      },
      { 
        label: "Predictive AI Analytics", 
        content: "Deployment of machine learning for failure prediction and Remaining Useful Life (RUL) estimation. We utilize vibration and operational signatures to perform automated fault diagnosis and root-cause analysis (RCA)." 
      },
      { 
        label: "Edge-to-Lab Hardware", 
        content: "Using NI CompactRIO for real-time edge processing and CompactDAQ for multi-channel sensor logging. For advanced diagnostics, NI PXI systems provide the high-speed signal processing required for complex rotating machinery analysis." 
      },
      { 
        label: "Design & Integration", 
        content: "Complete sensor validation and simulation of degradation scenarios. Our systems are performance-tested for alert accuracy and seamlessly integrated with enterprise asset management (EAM) and reporting infrastructure." 
      }
    ],
    points: [
      "Remaining Useful Life (RUL) Prediction",
      "Automated Root-Cause Analysis (RCA)",
      "Vibration & Harmonic Signature Tracking",
      "Edge-Deployed Machine Learning Models",
      "Thermal & Strain Degradation Analysis",
      "Real-time Asset Health Scoring",
      "EAM & Maintenance System Sync"
    ],
    imageAlt: "Condition monitoring dashboard showing vibration FFT analysis and RUL degradation curves"
  },
  // URL: /services/process-control-automation
  "process-control-automation": {
    title: "Process Control & Automation",
    category: "Chemical Processing",
    icon: faFlaskVial, // Ensure faFlaskVial or faMicroscope is imported
    desc: "Enabling precise and safe control of complex chemical reactions. We replace manual intervention with deterministic automation and intelligent optimization to improve yield, consistency, and plant safety.",
    tech: "cRIO + PXI Process Analytics",
    categories: [
      { 
        label: "Real-Time Process Monitoring", 
        content: "High-accuracy acquisition of critical variables including temperature, pressure, flow, pH, and conductivity. We integrate deterministic control for pumps, valves, and reactors, providing seamless interfacing with DCS and SCADA systems." 
      },
      { 
        label: "Intelligent Process Analytics", 
        content: "Deployment of AI/ML-driven predictive control and real-time reaction modeling. Our analytics engine performs yield estimation and trend analysis to identify instability or drift before they impact product quality." 
      },
      { 
        label: "Deterministic Hardware Platforms", 
        content: "Utilizing NI CompactRIO for mission-critical safety logic and real-time control. PXI systems are deployed for high-speed measurements and advanced spectral analytics, while CompactDAQ handles distributed sensor acquisition." 
      },
      { 
        label: "Design & Safety Validation", 
        content: "Rigorous calibration of industrial actuators and sensors. We specialize in the implementation of fail-safe and emergency shutdown (ESD) logic, verified through extensive simulation of abnormal process conditions." 
      }
    ],
    points: [
      "AI-Driven Reaction Optimization",
      "Deterministic Pump & Valve Control",
      "pH & Conductivity Anomaly Detection",
      "Real-time Yield Estimation Models",
      "DCS/SCADA Supervisory Integration",
      "Emergency Shutdown (ESD) Logic",
      "Continuous & Batch Process Automation"
    ],
    imageAlt: "Process control architecture diagram showing reactors, sensors, and NI control modules"
  },
  // URL: /services/safety-compliance-testing
  "safety-compliance-testing": {
    title: "Safety & Compliance Testing",
    category: "Chemical Processing",
    icon: faShieldVirus, // Ensure faShieldVirus or faHardHat is imported
    desc: "Ensuring chemical plants operate within strict regulatory and environmental limits. We provide high-integrity systems to monitor safety-critical parameters and validate protective interlocks, reducing the risk of unplanned shutdowns.",
    tech: "Deterministic ESD + Compliance Logging",
    categories: [
      { 
        label: "Safety Monitoring", 
        content: "Real-time acquisition of toxic gas emissions, pressure relief system status, and thermal limits. We integrate these inputs with safety interlocks and Emergency Shutdown (ESD) systems to ensure immediate response to hazardous conditions." 
      },
      { 
        label: "Risk & Audit Analytics", 
        content: "Deployment of predictive risk analysis and early warning indicators. Our systems utilize Statistical Process Control (SPC) for safety parameters and automate the generation of environmental and occupational audit reports." 
      },
      { 
        label: "Hardware Reliability", 
        content: "Leveraging NI CompactRIO for localized, deterministic safety logic that operates independently of the master network. High-speed PXI systems are used for transient monitoring of pressure spikes and critical sensor validation." 
      },
      { 
        label: "Validation Protocols", 
        content: "Rigorous simulation of leak, fault, and hazard scenarios. We verify every alarm and interlock logic path, ensuring sensor calibration meets international regulatory standards for environmental compliance." 
      }
    ],
    points: [
      "Toxic Gas & Emission Tracking",
      "Deterministic Emergency Shutdown (ESD)",
      "Automated Regulatory Audit Logs",
      "Predictive Hazard Risk Modeling",
      "Pressure Relief Valve Monitoring",
      "Fail-Safe Interlock Verification",
      "Environmental Compliance Reporting"
    ],
    imageAlt: "Industrial safety dashboard showing gas detector levels and ESD status"
  },
  // URL: /services/lab-instrumentation-automation
  "lab-instrumentation-automation": {
    title: "Laboratory Instrumentation & Automation",
    category: "Chemical Processing",
    icon: faMicroscope, // Ensure faMicroscope is imported
    desc: "Accelerating experimental workflows through high-precision data acquisition and automated control. We bridge the gap between analytical instruments and digital intelligence to improve repeatability in R&D and QC labs.",
    tech: "cDAQ Instrument Hub + LabVIEW",
    categories: [
      { 
        label: "Instrument Integration", 
        content: "Seamless interfacing with analytical hardware including spectrometers, chromatographs, and pH meters. Our systems provide real-time data acquisition and visualization, replacing manual logging with automated experiment sequencing." 
      },
      { 
        label: "Precision Analytics", 
        content: "Implementation of automated calibration curve generation and real-time data correction. We utilize AI/ML for experimental optimization and anomaly detection, ensuring statistical accuracy across every titration and sample run." 
      },
      { 
        label: "Laboratory Hardware", 
        content: "Using NI CompactDAQ for high-accuracy sensor acquisition and PXI systems for high-speed signal processing. We integrate laboratory-grade actuators for precise control of fluidics, heating, and stirring mechanisms." 
      },
      { 
        label: "Protocol Validation", 
        content: "Rigorous dry-run testing of experimental protocols to verify accuracy and repeatability. Our design focus includes instrument-specific calibration and response-time verification to meet strict laboratory quality standards." 
      }
    ],
    points: [
      "Automated Titration & Mixing",
      "Real-time Spectroscopy Logging",
      "Calibration Curve Auto-Generation",
      "Statistical Repeatability Analysis",
      "Chromatography Data Interfacing",
      "Experimental Workflow Sequencing",
      "High-Accuracy R&D Data Hub"
    ],
    imageAlt: "Automated laboratory workstation with NI CompactDAQ and integrated chemical sensors"
  },
  // URL: /services/pilot-plant-simulation-validation
  "pilot-plant-simulation-validation": {
    title: "Pilot Plant Simulation & Validation",
    category: "Chemical Processing",
    icon: faVials, // Ensure faVials is imported
    desc: "Bridging the gap between R&D and commercial production. We provide safe, controlled validation of chemical processes at pilot scale to optimize control strategies and eliminate scale-up risks.",
    tech: "cRIO Control + Scale-up Analytics",
    categories: [
      { 
        label: "Pilot Unit Monitoring", 
        content: "Real-time monitoring of pilot plant subsystems with deterministic control of heaters, mixers, pumps, and valves. We specialize in high-fidelity data acquisition required for complex process modeling and scale-up analysis." 
      },
      { 
        label: "Scale-up Analytics", 
        content: "Deployment of AI-driven process modeling and predictive feasibility analysis. Our systems detect anomalies during pilot runs, ensuring that engineers understand exact process behavior before committing to full-scale infrastructure." 
      },
      { 
        label: "Hybrid Hardware Architecture", 
        content: "Utilizing NI CompactRIO for real-time safety logic and PXI systems for high-speed analysis. CompactDAQ is deployed for flexible sensor interfacing, allowing for rapid reconfiguration as pilot protocols evolve." 
      },
      { 
        label: "Validation & Strategy", 
        content: "Comprehensive dry-run simulation of chemical processes and control strategy validation. We focus on sensor calibration and performance testing to ensure that pilot-scale results are mathematically translatable to commercial volumes." 
      }
    ],
    points: [
      "Process Scale-up Risk Modeling",
      "Deterministic Heater & Mixer Control",
      "Predictive Feasibility Analysis",
      "AI-Driven Process Optimization",
      "Real-time Subsystem Monitoring",
      "Safety Strategy Pre-Validation",
      "High-Fidelity Process Data Logging"
    ],
    imageAlt: "Pilot plant control system with NI CompactRIO and process modeling dashboard"
  },
  // URL: /services/power-generation-systems
  "power-generation-systems": {
    title: "Power Generation Systems",
    category: "Energy & Power",
    icon: faChargingStation, // Ensure faChargingStation or faBolt is imported
    desc: "Optimizing electricity production across thermal, hydro, gas, and nuclear plants. We provide high-integrity systems for turbine control and generator load balancing, ensuring grid stability and asset longevity.",
    tech: "cRIO Real-Time Control + PXI Diagnostics",
    categories: [
      { 
        label: "Generation & Control Core", 
        content: "Real-time acquisition of voltage, current, frequency, and vibration. We specialize in the deterministic control of turbine speed and excitation systems, providing seamless integration with SCADA/DCS for unified load balancing and supervisory monitoring." 
      },
      { 
        label: "Predictive Energy Analytics", 
        content: "Deployment of AI-driven efficiency optimization and early fault detection. Our systems perform long-term performance trend analysis on turbines and generators, identifying mechanical and electrical anomalies before they lead to catastrophic failure." 
      },
      { 
        label: "High-Reliability Platforms", 
        content: "Leveraging NI CompactRIO for real-time protection logic and CompactDAQ for high-accuracy sensor acquisition. For complex spectral diagnostics, NI PXI systems provide the necessary high-speed measurement bandwidth." 
      },
      { 
        label: "Safety & Determinism Validation", 
        content: "Rigorous simulation of load variations and startup/shutdown sequences. We focus on validating fail-safe mechanisms and emergency shutdown systems, ensuring millisecond-level determinism in critical control paths." 
      }
    ],
    points: [
      "Turbine Speed & Excitation Control",
      "Generator Load Balancing Logic",
      "High-Speed Vibration & FFT Analysis",
      "AI-Based Efficiency Optimization",
      "Grid Stability & Frequency Tracking",
      "Predictive Asset Health Monitoring",
      "DCS/SCADA Supervisory Interfacing"
    ],
    imageAlt: "Power plant control room dashboard showing turbine RPM, generator load, and vibration harmonics"
  },
  // URL: /services/smart-grid-distribution-systems
  "smart-grid-distribution-systems": {
    title: "Smart Grid & Distribution Systems",
    category: "Energy & Power",
    icon: faNetworkWired, // Ensure faNetworkWired is imported
    desc: "Building resilient and adaptive power distribution networks. Our solutions enable real-time monitoring, automated fault handling, and demand-response strategies to modernize utility operations and digital substations.",
    tech: "cRIO Edge Intelligence + PXI Power Quality",
    categories: [
      { 
        label: "Grid Monitoring Core", 
        content: "High-speed acquisition from smart meters, feeders, and distribution lines. We provide the infrastructure for controlling automated switches and intelligent relays, centralized via interactive dashboards for total operational visibility." 
      },
      { 
        label: "Stability & Load Analytics", 
        content: "Implementation of load forecasting and demand-response optimization. Our systems specialize in fault detection and isolation, performing consumption pattern analysis to detect energy theft and maintain grid stability." 
      },
      { 
        label: "Substation Hardware", 
        content: "Utilizing NI CompactRIO for localized edge control and substation monitoring. PXI systems are deployed for high-fidelity power quality analysis and transient signal acquisition across distributed distribution assets." 
      },
      { 
        label: "Network & Fail-Safe Design", 
        content: "Comprehensive simulation of grid disturbances and load variations. We focus on validating communication latency and fail-safe logic, ensuring metering devices and protection relays respond accurately to real-time faults." 
      }
    ],
    points: [
      "Digital Substation Automation",
      "Automated Fault Isolation (FLISR)",
      "High-Fidelity Power Quality Analysis",
      "Demand-Response Optimization",
      "Intelligent Relay & Switch Control",
      "Consumption Pattern AI Analytics",
      "Grid Stability & Harmonic Monitoring"
    ],
    imageAlt: "Digital substation dashboard with real-time feeder status and power quality metrics"
  },
  // URL: /services/renewable-energy-systems
  "renewable-energy-systems": {
    title: "Renewable Energy Systems",
    category: "Energy & Power",
    icon: faLeaf, // Ensure faLeaf or faWind is imported
    desc: "Optimizing solar, wind, and hydro generation through intelligent control and grid integration. We address renewable variability with real-time forecasting and energy storage coordination to ensure stable power delivery.",
    tech: "cRIO Real-Time Control + Power AI",
    categories: [
      { 
        label: "Generation & Control", 
        content: "High-accuracy acquisition from solar arrays, wind turbines, and hydro units. We provide deterministic control for inverters and converters, ensuring seamless energy storage coordination and real-time visualization of efficiency metrics." 
      },
      { 
        label: "Predictive Output Analytics", 
        content: "Deployment of weather-based generation forecasting and AI-driven performance optimization. Our systems analyze curtailment and grid integration patterns to reduce losses and predict maintenance needs for inverters and turbines." 
      },
      { 
        label: "Power Electronics Platforms", 
        content: "Utilizing NI CompactRIO for localized real-time control and PXI systems for high-speed analysis of power electronics. We integrate specialized sensors for irradiance, wind speed, and electrical harmonics." 
      },
      { 
        label: "Grid & Safety Validation", 
        content: "Rigorous simulation of output variability and grid interaction scenarios. We specialize in testing islanding detection, protection mechanisms, and fault tolerance to ensure compliance with global utility standards." 
      }
    ],
    points: [
      "Weather-Based Output Forecasting",
      "Solar Inverter & Converter Control",
      "Wind Turbine Pitch & Yaw Optimization",
      "Islanding Detection & Protection",
      "BESS (Battery Storage) Integration",
      "Power Electronics Harmonic Analysis",
      "Grid Curtailment & Stability Analytics"
    ],
    imageAlt: "Renewable energy management dashboard showing wind farm output and solar irradiance forecasting"
  },
  // URL: /services/medical-device-development-testing
  "medical-device-development-testing": {
    title: "Medical Device Development & Testing",
    category: "Life Sciences",
    icon: faStethoscope, // Ensure faStethoscope is imported
    desc: "Accelerating the lifecycle of medical equipment from prototype to certification. We provide high-accuracy systems for design verification and regulatory validation, ensuring device safety, reliability, and compliance with global standards.",
    tech: "Validated PXI + cDAQ Testbed",
    categories: [
      { 
        label: "Functional Verification", 
        content: "Real-time acquisition of sensor and actuator data for performance verification. We specialize in automated functional testing and calibration, integrating with embedded control systems to ensure device accuracy under mission-critical conditions." 
      },
      { 
        label: "Compliance & Reporting", 
        content: "Secure data logging and automated reporting for regulatory documentation (FDA/CE). Our systems perform statistical analysis on device repeatability and anomaly detection during functional and stress testing to ensure long-term reliability." 
      },
      { 
        label: "Precision Hardware Platforms", 
        content: "Utilizing NI CompactDAQ for high-accuracy biomedical sensor acquisition and PXI systems for high-speed synchronization of complex test rigs. We design custom fixtures and simulators to mimic real-world physiological environments." 
      },
      { 
        label: "Validation & Design", 
        content: "Comprehensive simulation of real-world operating conditions. We focus on calibration, safety validation, and verification testing to support manufacturers during prototype evaluation and formal regulatory submission workflows." 
      }
    ],
    points: [
      "FDA/ISO Regulatory Compliance Support",
      "Automated Functional Verification",
      "High-Accuracy Biomedical Data Hub",
      "Stress & Reliability Analysis",
      "Custom Test Rig & Fixture Design",
      "Biomedical Sensor Calibration",
      "Repeatability & Statistical Validation"
    ],
    imageAlt: "Medical device test station verifying an infusion pump using NI PXI and high-precision sensors"
  },
  // URL: /services/biomedical-signal-processing
  "biomedical-signal-processing": {
    title: "Biomedical Signal Acquisition & Processing",
    category: "Life Sciences",
    icon: faHeartPulse, // Ensure faHeartPulse is imported
    desc: "Capturing the language of the human body with precision. We develop systems for the high-fidelity acquisition of ECG, EEG, and EMG signals, utilizing real-time filtering and AI for automated diagnostic insights.",
    tech: "PXI Signal Intelligence + AI Models",
    categories: [
      { 
        label: "Signal Acquisition Core", 
        content: "High-accuracy capture of ECG, EEG, EMG, respiration, and motion data. Our systems specialize in real-time signal filtering and feature extraction, providing researchers and clinicians with clean, actionable visualizations of physiological health." 
      },
      { 
        label: "Diagnostic AI Analytics", 
        content: "Deployment of machine learning for pattern recognition and disease detection. We utilize time-domain and frequency-domain analysis to detect abnormal physiological patterns in real time, supporting automated anomaly detection workflows." 
      },
      { 
        label: "High-Fidelity Hardware", 
        content: "Leveraging NI CompactDAQ and CompactRIO for deterministic signal conditioning and acquisition. PXI systems are utilized for high-speed processing of multi-channel electrode data and complex bio-signal probes." 
      },
      { 
        label: "Validation & Noise Reduction", 
        content: "Meticulous calibration of amplifiers and front-end electronics. We focus on advanced noise reduction and signal quality validation, using clinical and research datasets to ensure accuracy across wearable and portable monitoring devices." 
      }
    ],
    points: [
      "High-Fidelity ECG/EEG/EMG Capture",
      "Real-time Signal Feature Extraction",
      "AI-Driven Anomaly Detection",
      "Frequency-Domain Spectral Analysis",
      "Noise Reduction & Artifact Removal",
      "Clinical Dataset Validation",
      "Portable & Wearable Device Interfacing"
    ],
    imageAlt: "Biomedical signal processing dashboard showing real-time ECG waveforms and heart rate variability analytics"
  },
  // URL: /services/medical-imaging-analysis
  "medical-imaging-analysis": {
    title: "Medical Imaging & Analysis",
    category: "Life Sciences",
    icon: faXRay,  // Ensure faXRay or faProcedures is imported
    desc: "Transforming raw data into diagnostic intelligence. We develop systems for high-fidelity image acquisition and AI-driven interpretation, enhancing accuracy across MRI, CT, and ultrasound modalities.",
    tech: "FPGA Acceleration + Deep Learning",
    categories: [
      { 
        label: "Modality Interfacing", 
        content: "Seamless interfacing with ultrasound, MRI, CT, and X-ray hardware. We specialize in real-time image acquisition and preprocessing, utilizing advanced enhancement algorithms to improve signal-to-noise ratios in clinical datasets." 
      },
      { 
        label: "AI Diagnostic Insights", 
        content: "Integration of deep learning for tissue classification and automated anomaly detection. Our systems perform complex 3D reconstruction and volumetric analysis, enabling automated image quality assessment and biomarker research." 
      },
      { 
        label: "Hardware Acceleration", 
        content: "Leveraging NI PXI and CompactRIO with onboard FPGA modules for low-latency image processing. We utilize high-performance GPU integration for AI-driven segmentation and real-time detection in surgical environments." 
      },
      { 
        label: "Validation & Simulation", 
        content: "Meticulous calibration of imaging sensors and modality interfaces. We focus on the verification of image processing algorithms and the simulation of varied acquisition scenarios for clinical training and diagnostic testing." 
      }
    ],
    points: [
      "AI-Driven Tumor & Lesion Detection",
      "Real-time 3D Volumetric Reconstruction",
      "Tissue Segmentation & Classification",
      "FPGA-Based Image Pre-processing",
      "Surgical Image-Guidance Integration",
      "Multi-Modality Data Fusion",
      "Automated Image Quality Scoring"
    ],
    imageAlt: "AI-enhanced medical imaging dashboard showing tumor segmentation and 3D volumetric reconstruction"
  },
  // URL: /services/patient-monitoring-systems
  "patient-monitoring-systems": {
    title: "Patient Monitoring Systems",
    category: "Life Sciences",
    icon: faHospitalUser, // Ensure faHospitalUser is imported
    desc: "Enabling continuous, high-integrity tracking of vital signs across clinical and remote environments. We provide real-time dashboards and predictive early-warning systems to ensure patient safety and timely medical intervention.",
    tech: "Distributed cRIO Monitoring + IoT",
    categories: [
      { 
        label: "Vital Sign Acquisition", 
        content: "Continuous monitoring of heart rate, blood pressure, SpO2, and respiration. We develop intuitive human-machine interfaces (HMIs) and real-time dashboards that provide clinicians with immediate visibility into patient status." 
      },
      { 
        label: "Predictive Deterioration Analytics", 
        content: "Implementation of early-warning score (EWS) computation and predictive modeling. Our systems utilize anomaly detection in vital sign patterns to identify physiological deterioration before critical events occur." 
      },
      { 
        label: "Secure Edge Platforms", 
        content: "Utilizing NI CompactRIO for localized real-time data acquisition and secure networking for remote monitoring. We integrate medical-grade sensors with deterministic hardware to ensure data integrity across telemetry networks." 
      },
      { 
        label: "Reliability & Safety Testing", 
        content: "Meticulous validation of sensor accuracy and end-to-end latency. We specialize in the simulation of emergency scenarios to verify alarm behavior and automated notification reliability in high-stakes environments." 
      }
    ],
    points: [
      "Early-Warning Score (EWS) Modeling",
      "Real-time ICU Telemetry Dashboards",
      "Predictive Patient Deterioration Alerts",
      "Secure Remote Patient Monitoring (RPM)",
      "Multi-Parameter Sensor Fusion",
      "Low-Latency Alarm Notification Systems",
      "Medical-Grade Data Encryption"
    ],
    imageAlt: "Centralized hospital monitoring station displaying real-time patient vitals and predictive health trends"
  },
  // URL: /services/hospital-lab-automation
  "hospital-lab-automation": {
    title: "Hospital Automation & Laboratory Testing",
    category: "Life Sciences",
    icon: faVials, // Ensure faVials or faMicroscope is imported
    desc: "Optimizing diagnostic accuracy and operational traceability. We develop automated workflows for sample handling and laboratory testing, reducing manual error while accelerating turnaround times for critical patient care.",
    tech: "PXI Diagnostic Hub + Robotic Logistics",
    categories: [
      { 
        label: "Diagnostic Instrumentation", 
        content: "High-fidelity integration with biochemical, blood, and urine analysis instruments. We utilize real-time data acquisition and reporting to replace manual logging, ensuring that diagnostic results are captured with millisecond precision and full traceability." 
      },
      { 
        label: "Workflow & Lab Analytics", 
        content: "Deployment of scheduling analytics and workflow optimization models. Our systems perform statistical analysis on lab results and use predictive maintenance to monitor the health of high-utilization diagnostic equipment." 
      },
      { 
        label: "Automation Hardware", 
        content: "Leveraging NI CompactRIO and PXI systems for deterministic instrument control. We integrate robotic sample handling and transport systems to automate the movement of specimens through the diagnostic lifecycle." 
      },
      { 
        label: "Integration & Validation", 
        content: "Meticulous calibration of laboratory instruments and dry-run workflow simulations. We focus on stress testing the integration between hardware controllers and Hospital Information Systems (HIS) to ensure data integrity." 
      }
    ],
    points: [
      "Automated Sample Tracking & Logistics",
      "High-Throughput Biochemical Testing",
      "Predictive Lab Equipment Maintenance",
      "HIS & LIMS Data Integration",
      "Robotic Sample Preparation Systems",
      "Statistical Result Validation",
      "Real-time Workflow Monitoring"
    ],
    imageAlt: "Automated diagnostic laboratory featuring robotic sample handling and NI PXI-based control systems"
  },// URL: /services/rehabilitation-prosthetics-systems
  "rehabilitation-prosthetics-systems": {
    title: "Rehabilitation & Prosthetics Systems",
    category: "Life Sciences",
    icon: faWalking, // Ensure faWalking or faWheelchair is imported
    desc: "Restoring mobility through advanced sensing and adaptive control. We develop high-performance systems for robotic exoskeletons and smart prosthetics, utilizing AI-driven gait analysis to personalize patient recovery.",
    tech: "cRIO Robotics + EMG Biomechanics",
    categories: [
      { 
        label: "Adaptive Control & Robotics", 
        content: "Real-time control of prosthetics and rehabilitation robots. We implement adaptive assistance strategies that utilize AI to respond to patient intent, providing smooth, deterministic movement through high-speed actuators." 
      },
      { 
        label: "Biomechanical Analytics", 
        content: "Deployment of gait evaluation and posture assessment models. Our systems perform detailed motion analysis and use adaptive algorithms to create personalized therapy plans, tracking recovery progress through objective performance metrics." 
      },
      { 
        label: "Sensing & Feedback Hardware", 
        content: "Utilizing NI CompactRIO for real-time control and CompactDAQ for multi-channel data acquisition. We integrate EMG electrodes, force plates, and IMU motion sensors to bridge the gap between human intent and robotic response." 
      },
      { 
        label: "Safety & Comfort Validation", 
        content: "Rigorous calibration of control loops and sensor arrays. We focus on the simulation of patient motion to validate device response, ensuring that assistive devices meet the highest standards for safety, comfort, and reliability." 
      }
    ],
    points: [
      "AI-Driven Gait & Posture Analysis",
      "EMG-Based Intent Recognition",
      "Robotic Exoskeleton Control",
      "Smart Prosthetic Adaptive Tuning",
      "Real-time Patient Biofeedback",
      "Force & Pressure Mapping",
      "Deterministic Safety Interlocks"
    ],
    imageAlt: "Patient using a robotic exoskeleton controlled by an NI CompactRIO system for gait rehabilitation"
  },
  // URL: /services/medical-research-systems
  "medical-research-systems": {
    title: "Data Integration & Medical Research Systems",
    category: "Life Sciences",
    icon: faDatabase, // Ensure faDatabase or faMicroscope is imported
    desc: "Powering precision medicine through secure data fusion. We integrate multi-source biomedical, imaging, and clinical data into unified platforms for advanced AI research and informed clinical decision-making.",
    tech: "PXI Data Fusion + Secure AI Research",
    categories: [
      { 
        label: "Multi-Source Acquisition", 
        content: "High-integrity acquisition from sensors, imaging systems, and lab instruments. We specialize in sub-microsecond data synchronization and traceable reporting, creating a unified digital foundation for complex biomedical research workflows." 
      },
      { 
        label: "AI-Driven Research Analytics", 
        content: "Deployment of machine learning for disease prediction and multi-source correlation. Our systems utilize advanced statistical visualization and data fusion to identify clinical biomarkers and accelerate therapeutic research." 
      },
      { 
        label: "High-Performance Platforms", 
        content: "Leveraging NI PXI systems for high-speed processing and real-time analytics. We utilize CompactRIO for distributed sensor acquisition, backed by secure databases and network interfaces that ensure strict data privacy." 
      },
      { 
        label: "Security & Validation", 
        content: "Meticulous validation of data synchronization and research workflows. We focus on security, privacy, and regulatory compliance validation (HIPAA/GDPR), ensuring research data meets the highest standards of integrity." 
      }
    ],
    points: [
      "Multi-Source Biomedical Data Fusion",
      "Precision Medicine AI Modeling",
      "Synchronized Sensor & Image Logging",
      "Secure HIPAA/GDPR Compliant Storage",
      "Clinical Decision Support Systems",
      "Real-time Research Visualization",
      "Advanced Statistical Biomarker Analysis"
    ],
    imageAlt: "Integrated medical research dashboard showing synchronized genomic, imaging, and physiological data"
  },
  // You can add all 50+ services here in the same format
};