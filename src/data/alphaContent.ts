import { 
  faRocket, faDroplet, faVial, faBolt, 
  faStethoscope, faIndustry ,faHeartPulse
} from '@fortawesome/free-solid-svg-icons';

export const alphaContent = {
  industries: {
    "aerospace-defence": {
      title: "Aerospace & Defence",
      icon: faRocket,
      desc: "Mission-critical engineering for Mach-speed validation. We provide deterministic systems for missile checkout, rocket propulsion, and satellite integration using high-fidelity NI PXI and FPGA architectures.",
      mainTech: "NI PXIe, LabVIEW RT/FPGA, TestStand, MIL-STD-1553B, ARINC 429, SpaceWire, VST (Vector Signal Transceivers)",
      
      subServices: [
        { 
          name: "Missile & Ballistic Checkout", 
          slug: "missile-ballistic-checkout",
          details: "Complete functional verification of guidance, navigation, and control (GNC) systems. We implement hardware abstraction layers (HAL) to support multiple missile variants on a single test bench.",
          features: [
            "Pyro Line & Squib Safety Interlock Testing",
            "Umbilical Interface Simulation",
            "Actuator Dynamics (TVC, Fin, Servo)",
            "Redundant Abort Logic Implementation"
          ]
        },
        { 
          name: "Rocket Motor Test Systems", 
          slug: "rocket-motor-test-systems",
          details: "High-speed, synchronized DAQ for solid and liquid propulsion. Our systems calculate thrust-time profiles and ignition delays in real-time on the FPGA for sub-millisecond safety response.",
          features: [
            "Synchronized Thrust/Pressure/Strain Acquisition",
            "Deterministic Ignition Sequencing (cRIO)",
            "Automated Thrust-Time & Impulse Analysis",
            "Hazardous Area Remote Monitoring"
          ]
        },
        { 
          name: "Radar & RF Systems", 
          slug: "radar-rf-systems",
          details: "Advanced waveform generation and analysis using PXI VSTs. We support Hardware-in-the-Loop (HIL) testing for radar seekers and electronic warfare (EW) simulators.",
          features: [
            "IQ Data Record & Replay (up to 4GHz BW)",
            "Beam Pattern & Gain/Phase Characterization",
            "Target Echo & SAR Environment Simulation",
            "Electronic Countermeasures (ECM) Validation"
          ]
        },
        { 
          name: "Satellite & SATCOM", 
          slug: "satellite-satcom",
          details: "End-to-end ground segment and payload testing. We validate RF chains, TT&C links, and satellite bus communication using modular PXI modular instrumentation.",
          features: [
            "DVB-S2/S2X Link Emulation",
            "Satellite Subsystem Telemetry Monitoring",
            "Payload RF Chain Verification",
            "Solar Array & Battery Simulation"
          ]
        },
        { 
          name: "Simulation & Emulation", 
          slug: "simulation-emulation",
          details: "Deterministic environment emulation for LRU validation. Using Digital Twins, we stress-test flight software against thousands of failure scenarios without risking hardware.",
          features: [
            "Hardware-in-the-Loop (HIL) Flight Simulation",
            "Sensor & Avionics Bus Emulation",
            "FPGA-Based Fault Injection",
            "High-Fidelity Real-Time Digital Twins"
          ]
        },
        { 
          name: "Data Acquisition & Control", 
          slug: "daq-control-systems",
          details: "The backbone of aerospace testing. High-channel count systems with AI-driven anomaly detection to identify structural weaknesses before they lead to failure.",
          features: [
            "1000+ Channel Synchronized Measurements",
            "Edge AI for Structural Health Monitoring",
            "Distributed Fiber Optic Sensing (DFOS)",
            "Secure ITAR-Compliant Data Storage"
          ]
        }
      ],

      compliance: ["MIL-STD-810H", "DO-178C (Level A)", "AS9100D", "ITAR / EAR Secure"],
      
      outcomes: [
        { label: "Safety Logic Speed", value: "<1ms" },
        { label: "Sync Precision", value: "Sub-10ns" },
        { label: "Data Integrity", value: "99.999%" }
      ],

      caseStudy: {
        title: "Multi-Stage Ballistic Validation",
        result: "Reduced pre-launch checkout time by 72% using a unified LabVIEW/TestStand framework across 400+ test points."
      }
    },
    "industry-40": {
      title: "Industry 4.0",
      icon: faIndustry,
      desc: "The total convergence of IT/OT. We build the Digital Twins, IIoT architectures, and autonomous shop-floor orchestration systems that define the modern Smart Factory through AI-driven insights.",
      mainTech: "MQTT Sparkplug B, ROS2, Azure Digital Twins, Edge AI (NVIDIA Jetson), EtherCAT, TSN, NI cRIO, OPC-UA",
      
      subServices: [
        { 
          name: "Smart Manufacturing", 
          slug: "smart-manufacturing",
          details: "Autonomous shop-floor orchestration using real-time machine data. We integrate robotic systems and PLCs with AI models for predictive process insights.",
          features: [
            "Real-time Robotic Coordination",
            "Automated Reporting & Visualization",
            "Process Optimization via ML",
            "Energy Consumption Analytics"
          ]
        },
        { 
          name: "Digital Twin Systems", 
          slug: "digital-twin-systems",
          details: "High-fidelity virtual replicas of physical assets. We synchronize live sensor data with digital models for advanced scenario testing and fault prediction.",
          features: [
            "Real-time Physical-Digital Sync",
            "AI-Driven Scenario Analysis",
            "Simulation-Based Optimization",
            "Predictive Behavioral Modeling"
          ]
        },
        { 
          name: "Industrial IoT (IIoT)", 
          slug: "iiot-systems",
          details: "Unified Namespace (UNS) architectures connecting edge devices to the cloud. We enable seamless monitoring and adaptive control across the enterprise.",
          features: [
            "Edge Processing & Data Logging",
            "Cloud & AI Platform Integration",
            "Anomaly Detection & Trend Analysis",
            "Modular IoT Network Design"
          ]
        },
        { 
          name: "Predictive Maintenance", 
          slug: "predictive-maintenance",
          details: "Zero-downtime strategies using vibration, thermal, and current analysis. Our AI models anticipate failures before they impact the production line.",
          features: [
            "High-Speed Sensor Monitoring",
            "Machine Learning Failure Prediction",
            "Time-Series Signal Analysis",
            "Rotating Machinery Health Dashboards"
          ]
        },
        { 
          name: "Robotics & Cobots", 
          slug: "robotics-cobots",
          details: "Safe human-robot collaboration (HRC) and high-precision automation. We implement vision-guided robotics for complex pick-and-place and assembly.",
          features: [
            "Vision-Based Inspection/Guidance",
            "AI Path Planning & Motion Opto",
            "Deterministic Motion Control",
            "Safe Human-Robot Interaction"
          ]
        },
        { 
          name: "Pharma & Biotech 4.0", 
          slug: "pharma-biotech-40",
          details: "Regulatory-compliant (GAMP 5) automation for drug formulation and batch monitoring. We integrate AI for yield optimization and quality assurance.",
          features: [
            "Batch Process Monitoring",
            "Automated Label Verification",
            "FDA/ISO Compliance Integration",
            "Predictive Yield Analytics"
          ]
        },
        { 
          name: "Digital Quality Inspection", 
          slug: "digital-quality-inspection",
          details: "Automated grading and defect detection using 2D/3D machine vision. We ensure 100% quality consistency across high-speed production lines.",
          features: [
            "AI-Based Multi-Feature Analysis",
            "Sub-micron Defect Detection",
            "OCR for Label & Packaging Trace",
            "Statistical Quality Control (SQC)"
          ]
        },
        { 
          name: "Smart Energy & Supply Chain", 
          slug: "energy-supply-chain",
          details: "Optimizing material flow and carbon footprint. We combine smart metering with automated warehouse logistics for a sustainable, efficient operation.",
          features: [
            "AI Consumption Prediction",
            "RFID & IoT Logistics Tracking",
            "Load Management & Grid Integration",
            "Warehouse Material Handling"
          ]
        }
      ],

      compliance: ["IEC 62443 (Cybersecurity)", "ISO 27001", "RAMI 4.0", "GAMP 5 / 21 CFR Part 11"],
      
      outcomes: [
        { label: "OEE Increase", value: "+35%" },
        { label: "Maintenance Cost", value: "-40%" },
        { label: "Energy Savings", value: "22%" }
      ],

      caseStudy: {
        title: "Tier 1 Automotive Digital Twin",
        result: "Deployed an enterprise-wide Digital Twin for a powertrain assembly line, resulting in a 30% reduction in bottleneck delays and 100% traceability."
      }
    },
    "oil-gas": {
      title: "Oil & Gas",
      icon: faDroplet,
      desc: "Harnessing deterministic control for the world's most demanding environments. We provide ruggedized SCADA, leak detection, and offshore condition monitoring systems using NI cRIO and high-fidelity telemetry.",
      mainTech: "NI cRIO (HazLoc), Modbus TCP/RTU, OPC-UA, DNP3, Satellite Telemetry, Edge AI, Vibration Analysis (FFT)",
      
      subServices: [
        { 
          name: "Pipeline Monitoring", 
          slug: "pipeline-monitoring",
          details: "Real-time leak detection and flow optimization across vast distances. We use cRIO for edge processing to detect pressure anomalies in milliseconds.",
          features: [
            "AI-Based Leak Detection",
            "Automated Valve & Pump Control",
            "Remote Telemetry via Satellite/4G",
            "SCADA & DCS Integration"
          ]
        },
        { 
          name: "Drilling & Exploration", 
          slug: "drilling-exploration",
          details: "Optimizing ROP (Rate of Penetration) while ensuring rig safety. Our systems monitor torque, vibration, and mud flow to prevent catastrophic failures.",
          features: [
            "High-Speed Vibration Monitoring",
            "Real-time Drill Depth & Torque Tracking",
            "Geospatial Seismic Data Acquisition",
            "Automated Emergency Shutdown (ESD)"
          ]
        },
        { 
          name: "Refinery Automation", 
          slug: "refinery-automation",
          details: "Precision control for distillation, cracking, and blending. We provide high-fidelity HMI and control loops for continuous chemical processing.",
          features: [
            "Distillation Column Loop Control",
            "Chemical Composition Monitoring",
            "Hazardous Area HMI Systems",
            "Predictive Maintenance for Pumps"
          ]
        },
        { 
          name: "Condition Monitoring", 
          slug: "condition-monitoring",
          details: "Proactive health tracking for rotating machinery. Using ultrasonic and vibration analysis, we predict bearing failures before they occur.",
          features: [
            "FFT & Time-Domain Signal Analysis",
            "Thermal Imaging Integration",
            "Bearing & Motor Health Dashboards",
            "Edge-to-Cloud Health Reporting"
          ]
        }
      ],

      compliance: ["Class I Div 2 (HazLoc)", "ATEX Zone 2", "IECEx Certified", "ISA-95 Standards"],
      
      outcomes: [
        { label: "Downtime Reduction", value: "-40%" },
        { label: "Safety Logic Speed", value: "<5ms" },
        { label: "Remote Reliability", value: "99.9%" }
      ],

      caseStudy: {
        title: "Deepwater Rig Condition Monitoring",
        result: "Prevented a major subsea pump failure by detecting bearing wear 72 hours in advance, saving an estimated $2.4M in downtime."
      }
    },

    "chemical-industry": {
      title: "Chemical Industry",
      icon: faVial,
      desc: "Precision engineering for batch and continuous chemical processing. We deliver automated reaction control, lab-to-plant scaling, and safety-critical monitoring systems.",
      mainTech: "NI PXIe, LabVIEW PID Toolkit, EtherCAT, GAMP 5, SQL/Database Integration, Machine Vision, pH/Conductivity Sensing",
      
      subServices: [
        { 
          name: "Process Control", 
          slug: "process-control-automation",
          details: "Mastering exothermic reactions with sub-degree temperature precision. We use advanced PID and Fuzzy Logic for complex mixing and separation.",
          features: [
            "Multi-loop PID Temperature Control",
            "Automated Batch Recipe Management",
            "pH & Conductivity Synchronization",
            "Real-time Reaction Yield Modeling"
          ]
        },
        { 
          name: "Safety & Compliance", 
          slug: "safety-compliance-testing",
          details: "Automated toxic gas monitoring and emissions reporting. Our systems ensure your plant stays within strict environmental and safety regulations.",
          features: [
            "Toxic Gas Detection & Interlocks",
            "Automated EPA/Compliance Reporting",
            "Pressure Relief Valve Monitoring",
            "Safety Shutdown Logic (SIL 2/3)"
          ]
        },
        { 
          name: "Lab Instrumentation", 
          slug: "lab-instrumentation",
          details: "Accelerating R&D with automated data acquisition for spectrometers, chromatographs, and custom titration setups.",
          features: [
            "Instrument Driver Development",
            "High-Speed Waveform Capture",
            "Automated Statistical Analysis",
            "Electronic Lab Notebook (ELN) Sync"
          ]
        },
        { 
          name: "Pilot Plant Simulation", 
          slug: "pilot-plant-simulation",
          details: "Bridging the gap between lab discovery and industrial production. We use digital twins to validate scaling before full plant deployment.",
          features: [
            "Process Scale-up Modeling",
            "HIL (Hardware-in-the-Loop) Testing",
            "Virtual Plant Commissioning",
            "Formula Optimization Algorithms"
          ]
        }
      ],

      compliance: ["GAMP 5 (Validation)", "21 CFR Part 11", "ISO 9001:2015", "SIL 2/3 Integrity"],
      
      outcomes: [
        { label: "Batch Yield Increase", value: "+18%" },
        { label: "Compliance Accuracy", value: "100%" },
        { label: "R&D Cycle Time", value: "-30%" }
      ],

      caseStudy: {
        title: "Polymer Batch Optimization",
        result: "Implemented an automated batch control system that increased production yield by 18% while reducing hazardous waste by 12%."
      }
    },

    "power-energy": {
      title: "Power & Energy",
      icon: faBolt,
      desc: "Architecting the future of the resilient grid. We provide deterministic control for power generation, smart distribution, and renewable integration using high-speed NI PXI and FPGA-driven monitoring.",
      mainTech: "NI PXI (High-Speed DAQ), LabVIEW Electrical Power Suite, PMU (Phasor Measurement Units), IEC 61850, Modbus TCP, IEEE 1588 (PTP) Sync, MQTT",
      
      subServices: [
        { 
          name: "Power Generation", 
          slug: "power-generation",
          details: "High-precision monitoring and optimization of thermal, hydro, and nuclear plants. We implement sub-millisecond safety logic for turbine control and load balancing.",
          features: [
            "Deterministic Turbine Speed Control",
            "Real-time Phase & Frequency Monitoring",
            "FPGA-Based Fault Detection",
            "Predictive Generator Maintenance"
          ]
        },
        { 
          name: "Smart Grid & Distribution", 
          slug: "smart-grid-distribution",
          details: "Intelligent distribution automation for improved grid reliability. We build PMU-based wide-area monitoring systems to detect stability issues instantly.",
          features: [
            "Wide Area Monitoring (WAMS)",
            "Automated Demand-Response Management",
            "Energy Theft & Anomaly Detection",
            "Substation Automation (IEC 61850)"
          ]
        },
        { 
          name: "Renewable Energy", 
          slug: "renewable-energy",
          details: "Optimizing the integration of wind, solar, and hydro into the grid. Our systems manage high-speed converters and energy storage for maximum efficiency.",
          features: [
            "Solar/Wind Farm Control & Sync",
            "MPPT Algorithm Optimization",
            "Battery Storage System (BESS) Control",
            "Weather-Based Load Forecasting"
          ]
        },
        { 
          name: "Power Quality Analysis", 
          slug: "power-quality-analysis",
          details: "Ensuring 24/7 power stability. We use high-speed PXI systems to analyze Total Harmonic Distortion (THD) and transients that damage sensitive equipment.",
          features: [
            "Harmonic Analysis & Mitigation",
            "Voltage Sag & Swell Detection",
            "High-Speed Transient Capture",
            "Compliance Reporting (IEEE 519)"
          ]
        }
      ],

      compliance: ["IEC 61850 (Substation)", "IEEE 1588 (Time Sync)", "Nodal Analysis (NAOC)", "NERC CIP Security"],
      
      outcomes: [
        { label: "Grid Sync Precision", value: "<1µs" },
        { label: "Efficiency Gain", value: "+12%" },
        { label: "Fault Detection", value: "<10ms" }
      ],

      caseStudy: {
        title: "National Grid Smart PMU Deployment",
        result: "Deployed a Phasor Measurement Unit (PMU) network using NI cRIO, providing real-time grid stability data with sub-microsecond GPS time-stamping."
      }
    },

    "medical-health": {
      title: "Medical & Health",
      icon: faHeartPulse,
      desc: "Engineering life-critical systems with surgical precision. We specialize in FDA-validated medical device testing, real-time biomedical signal processing, and AI-accelerated medical imaging using NI PXI and LabVIEW Biomedical toolkits.",
      mainTech: "NI PXIe, LabVIEW Biomedical Toolkit, FDA 21 CFR Part 11 DSC Module, NVIDIA TensorRT (AI), FPGA-based Signal Filtering, DICOM, HL7/FHIR Integration",
      
      subServices: [
        { 
          name: "Medical Device V&V", 
          slug: "medical-device-testing",
          details: "Rigorous Verification & Validation (V&V) for life-critical hardware. We build automated test rigs for ventilators, infusion pumps, and surgical robots that meet strict global regulatory standards.",
          features: [
            "Automated IQ/OQ/PQ Validation",
            "Hardware-in-the-Loop (HIL) Simulation",
            "Sub-micron Force & Flow Measurement",
            "Automated Compliance Report Generation"
          ]
        },
        { 
          name: "Biomedical Signal Processing", 
          slug: "biomedical-signals",
          details: "Acquiring and analyzing high-fidelity physiological data. Our systems use FPGA-based filtering for real-time ECG, EEG, and EMG feature extraction and anomaly detection.",
          features: [
            "Real-time Waveform Feature Extraction",
            "Adaptive Noise & Artifact Removal",
            "Multi-channel Synchronized DAQ",
            "AI-Driven Disease Pattern Recognition"
          ]
        },
        { 
          name: "Medical Imaging & AI", 
          slug: "medical-imaging-analysis",
          details: "Accelerating diagnosis with AI-enhanced imaging. We leverage GPU-accelerated reconstruction for Ultrasound, MRI, and CT data, enabling real-time 3D tissue classification.",
          features: [
            "GPU-Accelerated 3D Reconstruction",
            "Deep Learning Image Segmentation",
            "Real-time Ultrasound Beamforming",
            "DICOM Standard Data Integration"
          ]
        },
        { 
          name: "Rehabilitation & Robotics", 
          slug: "rehabilitation-prosthetics",
          details: "Designing adaptive control for exoskeletons and smart prosthetics. We use LabVIEW Real-Time to synchronize motion sensors with robotic actuators for personalized patient recovery.",
          features: [
            "Adaptive HRI (Human-Robot Interaction)",
            "Gait Analysis & Motion Tracking",
            "Myoelectric Signal Control Systems",
            "Robotic Physical Therapy Workflows"
          ]
        }
      ],

      compliance: ["FDA 21 CFR Part 11", "ISO 13485 (Medical Quality)", "IEC 62304 (Software)", "HIPAA Data Privacy"],
      
      outcomes: [
        { label: "Validation Time", value: "-50%" },
        { label: "Signal SNR", value: "+25dB" },
        { label: "AI Accuracy", value: "99.2%" }
      ],

      caseStudy: {
        title: "Next-Gen Ventilator Testing Platform",
        result: "Developed an automated PXI-based V&V system for a Tier 1 medical manufacturer, reducing time-to-market by 6 months while ensuring 100% FDA audit readiness."
      }
    }
  
  
  }
};