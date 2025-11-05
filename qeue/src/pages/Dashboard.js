import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Calendar,
  UserCheck,
  CreditCard,
  Pill,
  FileText,
  Settings,
  Search,
  Bell,
  Menu,
  X,
  Moon,
  Sun,
  LogOut,
  ChevronDown,
  TrendingUp,
  Activity
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
// import { Alert, AlertDescription } from '@/components/ui/alert';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
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

  const appointmentsData = [
    { day: 'Mon', appointments: 45 },
    { day: 'Tue', appointments: 52 },
    { day: 'Wed', appointments: 49 },
    { day: 'Thu', appointments: 58 },
    { day: 'Fri', appointments: 55 },
    { day: 'Sat', appointments: 38 },
    { day: 'Sun', appointments: 30 }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 85000 },
    { month: 'Feb', revenue: 92000 },
    { month: 'Mar', revenue: 88000 },
    { month: 'Apr', revenue: 95000 },
    { month: 'May', revenue: 103000 },
    { month: 'Jun', revenue: 98000 }
  ];

  const recentAppointments = [
    { id: 1, patient: 'John Smith', doctor: 'Dr. Sarah Wilson', date: '2025-11-05', time: '09:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Emma Johnson', doctor: 'Dr. Michael Chen', date: '2025-11-05', time: '10:30 AM', status: 'Pending' },
    { id: 3, patient: 'Robert Brown', doctor: 'Dr. Sarah Wilson', date: '2025-11-05', time: '11:00 AM', status: 'Confirmed' },
    { id: 4, patient: 'Lisa Davis', doctor: 'Dr. James Miller', date: '2025-11-05', time: '02:00 PM', status: 'Cancelled' },
    { id: 5, patient: 'David Wilson', doctor: 'Dr. Emily Taylor', date: '2025-11-06', time: '09:30 AM', status: 'Confirmed' }
  ];

  const metrics = [
    { title: 'Total Patients', value: '2,847', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Appointments', value: '156', change: '+8%', icon: Calendar, color: 'bg-green-500' },
    { title: 'Available Doctors', value: '42', change: '+2', icon: UserCheck, color: 'bg-purple-500' },
    { title: 'Pending Bills', value: '$24,580', change: '-5%', icon: CreditCard, color: 'bg-orange-500' }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'doctors', label: 'Doctors', icon: UserCheck },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'pharmacy', label: 'Pharmacy', icon: Pill },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700';
      case 'Pending': return darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-700';
      case 'Cancelled': return darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-700';
      default: return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Top Navigation Bar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-sm`}
      >
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
              <span className="text-xl font-bold hidden sm:block">MediCare Hospital</span>
            </div>
          </div>

          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search patients, appointments, doctors..."
                className={`w-full pl-10 pr-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} hover:bg-opacity-80 transition-colors`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} hover:bg-opacity-80 transition-colors relative`}>
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} hover:bg-opacity-80 transition-colors`}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                  AD
                </div>
                <ChevronDown size={16} className="hidden sm:block" />
              </button>
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute right-0 mt-2 w-48 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg py-2 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                  >
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="font-semibold">Admin User</p>
                      <p className="text-sm text-gray-500">admin@hospital.com</p>
                    </div>
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                      <LogOut size={16} />
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || !isMobile) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25 }}
            className={`fixed left-0 top-16 bottom-0 z-40 ${
              isMobile && sidebarOpen ? 'w-64' : sidebarOpen ? 'w-64' : 'w-20'
            } ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r shadow-lg transition-all duration-300`}
          >
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (isMobile) setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : darkMode
                      ? 'hover:bg-gray-700'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={22} />
                  {(sidebarOpen || isMobile) && <span className="font-medium">{item.label}</span>}
                </motion.button>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`pt-20 transition-all duration-300 ${
        sidebarOpen && !isMobile ? 'ml-64' : !isMobile ? 'ml-20' : 'ml-0'
      }`}>
        <div className="p-4 md:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
              Welcome back! Here's what's happening today.
            </p>
          </motion.div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm hover:shadow-md transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${metric.color} p-3 rounded-lg`}>
                    <metric.icon className="text-white" size={24} />
                  </div>
                  <span className={`text-sm font-semibold px-2 py-1 rounded ${
                    metric.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {metric.title}
                </h3>
                <p className="text-2xl font-bold">{metric.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm`}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-blue-500" size={24} />
                Appointments This Week
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={appointmentsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="day" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                      border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="appointments" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm`}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Activity className="text-green-500" size={24} />
                Revenue Trend
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="month" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                      border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                      borderRadius: '8px'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ fill: '#10b981', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Recent Appointments Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden`}
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold">Recent Appointments</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Patient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Doctor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider hidden md:table-cell">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider hidden sm:table-cell">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {recentAppointments.map((appointment) => (
                    <motion.tr
                      key={appointment.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ backgroundColor: darkMode ? '#374151' : '#f9fafb' }}
                      className="transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{appointment.patient}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{appointment.doctor}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{appointment.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{appointment.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 top-16"
        />
      )}
    </div>
  );
};

export default Dashboard;