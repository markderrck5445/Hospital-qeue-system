import React, { useState, useEffect } from 'react';
import {
  Calendar,
  FileText,
  Pill,
  CreditCard,
  User,
  Bell,
  Menu,
  Moon,
  Sun,
  LogOut,
  ChevronDown,
  Clock,
  MapPin,
  Activity,
  Heart,
  Droplet,
  Thermometer,
  Mail,
  Phone
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

export default function Dashboard() {
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
      doctor: 'Dr. Emily Roberts',
      specialty: 'Dermatologist',
      date: '2025-11-22',
      time: '11:00 AM',
      location: 'Building C, Room 301',
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

  const handleMenuClick = (itemId) => {
    setActiveTab(itemId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const handleLogout = () => {
    alert('Logging out...');
    // In a real app, you would clear session/tokens and redirect to login
  };

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

  const renderOverview = () => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {healthMetrics.map((metric) => (
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
            <Line type="monotone" dataKey="bloodPressure" stroke="#3b82f6" strokeWidth={2} name="Blood Pressure" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Upcoming Appointments</h2>
          <button
            onClick={() => handleMenuClick('appointments')}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            View All →
          </button>
        </div>
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
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>{new Date(apt.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span>{apt.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>{apt.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderAppointments = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm`}>
      <h2 className="text-xl font-bold mb-6">All Appointments</h2>
      <div className="space-y-4">
        {upcomingAppointments.map((apt) => (
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
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>{new Date(apt.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <span>{apt.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>{apt.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
        Book New Appointment
      </button>
    </div>
  );

  const renderPrescriptions = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm`}>
      <h2 className="text-xl font-bold mb-6">My Prescriptions</h2>
      <div className="space-y-4">
        {prescriptions.map((rx) => (
          <div key={rx.id} className={`p-4 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-lg">{rx.medication}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Prescribed by {rx.prescribedBy}
                </p>
              </div>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {rx.refills} refills left
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dosage:</span>
                <span className="ml-2 font-medium">{rx.dosage}</span>
              </div>
              <div>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Frequency:</span>
                <span className="ml-2 font-medium">{rx.frequency}</span>
              </div>
              <div>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration:</span>
                <span className="ml-2 font-medium">{rx.duration}</span>
              </div>
              <div>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Date:</span>
                <span className="ml-2 font-medium">{new Date(rx.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRecords = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm`}>
      <h2 className="text-xl font-bold mb-6">Medical Records</h2>
      <div className="space-y-3">
        {medicalRecords.map((record) => (
          <div
            key={record.id}
            className={`p-4 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} cursor-pointer transition-colors`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold">{record.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {record.doctor} • {new Date(record.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                {record.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBilling = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm`}>
      <h2 className="text-xl font-bold mb-6">Bills & Payments</h2>
      <div className="space-y-3">
        {bills.map((bill) => (
          <div
            key={bill.id}
            className={`p-4 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{bill.description}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {new Date(bill.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">KSh {bill.amount.toLocaleString()}</p>
                <span className={`text-xs px-2 py-1 rounded ${getStatusColor(bill.status)}`}>
                  {bill.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm`}>
      <h2 className="text-xl font-bold mb-6">My Profile</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {patientInfo.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="text-xl font-bold">{patientInfo.name}</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Patient ID: {patientInfo.id}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
              <p className="font-medium">{patientInfo.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-green-600" />
            <div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
              <p className="font-medium">{patientInfo.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Droplet className="w-5 h-5 text-red-600" />
            <div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Blood Type</p>
              <p className="font-medium">{patientInfo.bloodType}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-purple-600" />
            <div>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Age / Gender</p>
              <p className="font-medium">{patientInfo.age} / {patientInfo.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'appointments':
        return renderAppointments();
      case 'prescriptions':
        return renderPrescriptions();
      case 'records':
        return renderRecords();
      case 'billing':
        return renderBilling();
      case 'profile':
        return renderProfile();
      default:
        return renderOverview();
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen flex`}>
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed lg:static inset-y-0 left-0 z-50 w-64 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-r transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold">Patient Portal</h1>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : darkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-30`}>
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Menu className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 ml-auto">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {patientInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}