import React, { useState, useEffect } from 'react';
import {
  Calendar,
  FileText,
  Pill,
  CreditCard,
  User,
  Search,
  Bell,
  Menu,
  X,
  Moon,
  Sun,
  LogOut,
  ChevronDown,
  Clock,
  MapPin,
  Phone,
  Mail,
  Activity,
  Heart,
  Droplet,
  Thermometer
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const patientInfo = {
    name: 'John Smith',
    id: 'PT-2847',
    email: 'john.smith@email.com',
    phone: '+254 712 345 678',
    bloodType: 'O+',
    age: 34,
    gender: 'Male'
  };

  const vitalSigns = [
    { date: 'Nov 1', heartRate: 72, bloodPressure: 120 },
    { date: 'Nov 2', heartRate: 75, bloodPressure: 118 },
    { date: 'Nov 3', heartRate: 70, bloodPressure: 122 },
    { date: 'Nov 4', heartRate: 73, bloodPressure: 119 },
    { date: 'Nov 5', heartRate: 71, bloodPressure: 121 },
    { date: 'Nov 6', heartRate: 74, bloodPressure: 120 }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Cardiologist',
      date: '2025-11-08',
      time: '10:00 AM',
      location: 'Building A, Room 203',
      status: 'Confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Physician',
      date: '2025-11-15',
      time: '02:30 PM',
      location: 'Building B, Room 105',
      status: 'Confirmed'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Taylor',
      specialty: 'Dermatologist',
      date: '2025-11-20',
      time: '11:00 AM',
      location: 'Building A, Room 301',
      status: 'Pending'
    }
  ];

  const prescriptions = [
    {
      id: 1,
      medication: 'Amoxicillin',
      dosage: '500mg',
      frequency: '3 times daily',
      duration: '7 days',
      prescribedBy: 'Dr. Sarah Wilson',
      date: '2025-10-30',
      refills: 2
    },
    {
      id: 2,
      medication: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      duration: 'Ongoing',
      prescribedBy: 'Dr. Michael Chen',
      date: '2025-10-15',
      refills: 5
    },
    {
      id: 3,
      medication: 'Vitamin D3',
      dosage: '1000 IU',
      frequency: 'Once daily',
      duration: 'Ongoing',
      prescribedBy: 'Dr. Sarah Wilson',
      date: '2025-09-20',
      refills: 3
    }
  ];

  const medicalRecords = [
    {
      id: 1,
      title: 'Annual Checkup Report',
      date: '2025-10-15',
      doctor: 'Dr. Michael Chen',
      type: 'Checkup'
    },
    {
      id: 2,
      title: 'Blood Test Results',
      date: '2025-10-10',
      doctor: 'Lab Department',
      type: 'Lab Report'
    },
    {
      id: 3,
      title: 'X-Ray Report - Chest',
      date: '2025-09-28',
      doctor: 'Dr. Sarah Wilson',
      type: 'Imaging'
    },
    {
      id: 4,
      title: 'Vaccination Record',
      date: '2025-09-15',
      doctor: 'Nurse Department',
      type: 'Vaccination'
    }
  ];

  const bills = [
    {
      id: 1,
      description: 'Consultation - Dr. Sarah Wilson',
      date: '2025-10-30',
      amount: 5000,
      status: 'Paid'
    },
    {
      id: 2,
      description: 'Blood Test - Complete Panel',
      date: '2025-10-10',
      amount: 3500,
      status: 'Paid'
    },
    {
      id: 3,
      description: 'X-Ray - Chest',
      date: '2025-09-28',
      amount: 2500,
      status: 'Pending'
    },
    {
      id: 4,
      description: 'Annual Checkup',
      date: '2025-10-15',
      amount: 4000,
      status: 'Paid'
    }
  ];

  const healthMetrics = [
    { title: 'Heart Rate', value: '74 bpm', icon: Heart, color: 'bg-red-500', status: 'Normal' },
    { title: 'Blood Pressure', value: '120/80', icon: Activity, color: 'bg-blue-500', status: 'Normal' },
    { title: 'Blood Sugar', value: '95 mg/dL', icon: Droplet, color: 'bg-purple-500', status: 'Normal' },
    { title: 'Temperature', value: '98.6°F', icon: Thermometer, color: 'bg-orange-500', status: 'Normal' }
  ];

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'appointments', label: 'My Appointments', icon: Calendar },
    { id: 'prescriptions', label: 'Prescriptions', icon: Pill },
    { id: 'records', label: 'Medical Records', icon: FileText },
    { id: 'billing', label: 'Bills & Payments', icon: CreditCard },
    { id: 'profile', label: 'My Profile', icon: User }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
      case 'Paid':
        return darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700';
      case 'Pending':
        return darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-700';
      case 'Cancelled':
        return darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-700';
      default:
        return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
              {healthMetrics.map((metric, index) => (
                <div
                  key={metric.title}
                  className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${metric.color} p-3 rounded-lg`}>
                      <metric.icon className="text-white" size={24} />
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-700">
                      {metric.status}
                    </span>
                  </div>
                  <h3 className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {metric.title}
                  </h3>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm mb-8`}>
              <h2 className="text-xl font-bold mb-4">Vital Signs Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={vitalSigns}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="date" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                      border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="heartRate" stroke="#ef4444" strokeWidth={2} name="Heart Rate" />
                  <Line type="monotone" dataKey="bloodPressure" stroke="#3b82f6" strokeWidth={2} name="Blood Pressure (Systolic)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm`}>
              <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
              <div className="space-y-4">
                {upcomingAppointments.slice(0, 2).map((apt) => (
                  <div key={apt.id} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{apt.doctor}</h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{apt.specialty}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(apt.status)}`}>
                        {apt.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-blue-500" />
                        <span>{apt.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-blue-500" />
                        <span>{apt.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-blue-500" />
                        <span>{apt.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case 'appointments':
        return (
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm`}>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-xl font-bold">My Appointments</h2>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Book New Appointment
              </button>
            </div>
            <div className="p-6 space-y-4">
              {upcomingAppointments.map((apt) => (
                <div
                  key={apt.id}
                  className={`p-6 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} hover:scale-[1.01] transition-transform`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{apt.doctor}</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{apt.specialty}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(apt.status)}`}>
                      {apt.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-blue-500" />
                      <span>{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-blue-500" />
                      <span>{apt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-blue-500" />
                      <span>{apt.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm">
                      Reschedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'prescriptions':
        return (
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm`}>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold">My Prescriptions</h2>
            </div>
            <div className="p-6 space-y-4">
              {prescriptions.map((rx) => (
                <div
                  key={rx.id}
                  className={`p-6 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} hover:scale-[1.01] transition-transform`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{rx.medication}</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {rx.dosage} - {rx.frequency}
                      </p>
                    </div>
                    <Pill className="text-blue-500" size={24} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
                    <div>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Duration: </span>
                      <span className="font-medium">{rx.duration}</span>
                    </div>
                    <div>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Refills Left: </span>
                      <span className="font-medium">{rx.refills}</span>
                    </div>
                    <div>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Prescribed By: </span>
                      <span className="font-medium">{rx.prescribedBy}</span>
                    </div>
                    <div>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Date: </span>
                      <span className="font-medium">{rx.date}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                    Request Refill
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'records':
        return (
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm`}>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold">Medical Records</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Document</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider hidden md:table-cell">Doctor/Department</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {medicalRecords.map((record) => (
                    <tr key={record.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}>
                      <td className="px-6 py-4">
                        <div className="font-medium">{record.title}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                          {record.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{record.doctor}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{record.date}</div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm`}>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Bills & Payments</h2>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Total Outstanding</p>
                  <p className="text-2xl font-bold text-orange-500">KSh 2,500</p>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider hidden sm:table-cell">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {bills.map((bill) => (
                    <tr key={bill.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}>
                      <td className="px-6 py-4">
                        <div className="font-medium">{bill.description}</div>
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{bill.date}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold">KSh {bill.amount.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(bill.status)}`}>
                          {bill.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {bill.status === 'Pending' ? (
                          <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                            Pay Now
                          </button>
                        ) : (
                          <button className="text-blue-500 hover:text-blue-600 text-sm">
                            Receipt
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`lg:col-span-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm p-6`}>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                  {patientInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h2 className="text-2xl font-bold mb-1">{patientInfo.name}</h2>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Patient ID: {patientInfo.id}</p>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>

            <div className={`lg:col-span-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm p-6`}>
              <h3 className="text-xl font-bold mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-2`}>
                    <User size={16} /> Gender
                  </label>
                  <p className="text-lg font-semibold mt-1">{patientInfo.gender}</p>
                </div>
                <div>
                  <label className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-2`}>
                    <Calendar size={16} /> Age
                  </label>
                  <p className="text-lg font-semibold mt-1">{patientInfo.age} years</p>
                </div>
                <div>
                  <label className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-2`}>
                    <Droplet size={16} /> Blood Type
                  </label>
                  <p className="text-lg font-semibold mt-1">{patientInfo.bloodType}</p>
                </div>
                <div>
                  <label className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-2`}>
                    <Phone size={16} /> Phone
                  </label>
                  <p className="text-lg font-semibold mt-1">{patientInfo.phone}</p>
                </div>
                <div className="md:col-span-2">
                  <label className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-2`}>
                    <Mail size={16} /> Email
                  </label>
                  <p className="text-lg font-semibold mt-1">{patientInfo.email}</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-sm`}>
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-opacity-80 transition-colors"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center gap-2">
                <Activity className="text-blue-500" size={32} />
                <span className="text-xl font-bold hidden sm:block">MediCare Portal</span>
              </div>
            </div>
  
            <div className="flex-1 max-w-xl mx-4 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search appointments, prescriptions..."
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'} focus:outline-none`}
                />
              </div>
            </div>
  
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Notifications">
                <Bell size={20} />
              </button>
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                    {patientInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <ChevronDown size={16} />
                </button>
                {userMenuOpen && (
                  <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
  
        <main className="pt-20 px-4 pb-8 max-w-7xl mx-auto">
          <div className="flex gap-6">
            {sidebarOpen && (
              <aside className={`w-64 hidden lg:block ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border p-4`}>
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-md ${activeTab === item.id ? 'bg-blue-50 dark:bg-blue-900' : ''}`}
                    >
                      <item.icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </aside>
            )}
  
            <section className="flex-1">
              {renderContent()}
            </section>
          </div>
        </main>
      </div>
    );
  };
  
  export default Dashboard;