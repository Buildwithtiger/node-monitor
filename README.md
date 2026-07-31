# node-monitor

A real-time system monitoring tool built with Node.js that displays CPU usage per core and memory utilization in an elegant terminal interface.

## 📊 Features

- **Real-time CPU Monitoring**: Tracks CPU usage per core with percentage breakdown
- **Memory Utilization**: Displays used and total system memory in GB
- **Colorful Terminal Output**: Uses chalk for enhanced readability
- **Auto-refresh**: Updates system stats every second
- **Cross-platform**: Works on Windows, macOS, and Linux

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/machine-js.git

# Navigate to project directory
cd machine-js

# Install dependencies
npm install
```

## 📦 Dependencies

- [chalk](https://www.npmjs.com/package/chalk) - Terminal string styling
- [node:os](https://nodejs.org/api/os.html) - Node.js built-in OS module

## 🎯 Usage

```bash
node machine.js
```

### Output Example

```
============System Stats=============
┌─────────┬────────┬─────────┐
│ (index) │  core  │  usage  │
├─────────┼────────┼─────────┤
│    0    │   0    │ '12.5%' │
│    1    │   1    │ '8.3%'  │
│    2    │   2    │ '15.7%' │
│    3    │   3    │ '5.2%'  │
│    4    │   4    │ '22.1%' │
│    5    │   5    │ '3.8%'  │
│    6    │   6    │ '9.6%'  │
│    7    │   7    │ '4.5%'  │
└─────────┴────────┴─────────┘
Memory used: 2.45GB / 16.00GB
```

## 🔧 How It Works

1. **CPU Calculation**: Compares CPU times between two snapshots (1-second interval)
2. **Core Display**: Shows usage percentage for each CPU core
3. **Memory Monitoring**: Calculates used memory from total and free memory

### Core Functions

| Function | Description |
|----------|-------------|
| `monitor()` | Main monitoring function that displays system stats |
| `calculatecpus()` | Calculates CPU usage percentage between two snapshots |

## 📝 Configuration

The monitoring interval is set to **1000ms** (1 second). To adjust:

```javascript
// Change the interval in the setInterval call
setInterval(monitor, 2000); // Updates every 2 seconds
```

## 🛠️ Technical Details

- **CPU Calculation Formula**: 
  ```
  CPU Usage = (Total Time - Idle Time) / Total Time × 100
  ```
- **Memory Conversion**: Converts bytes to gigabytes (1024³)
- **Display**: Uses `console.table()` for structured output

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Use Cases

- Development environment monitoring
- System performance debugging
- Load testing visualization
- Resource utilization tracking

## 🐛 Known Issues

- Some Windows systems may show different CPU core naming conventions
- ARM processors (Apple Silicon) display different core types

## 🔮 Future Enhancements

- [ ] Add network usage monitoring
- [ ] Process-level CPU tracking
- [ ] Disk I/O monitoring
- [ ] Export metrics to file
- [ ] WebSocket server for remote monitoring
- [ ] Graphical dashboard option

---

**Made with ❤️ using Node.js**
