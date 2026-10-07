const devices = [
    {
        id: "DEV01",
        name: "Điều hòa",
        powerWatts: 1500,
        isActive: true
    },
    {
        id: "DEV02",
        name: "Quạt",
        powerWatts: 60,
        isActive: true
    },
    {
        id: "DEV03",
        name: "Đèn",
        powerWatts: 40,
        isActive: true
    }
];

const findDeviceById = (devices, targetId) => {
    for (let i = 0; i < devices.length; i++) {
        if (devices[i].id === targetId) {
        return devices[i];
        }
    }

    return null;
};

const updateDeviceState = (devices, targetId, updateData) => {
    const targetDevice = findDeviceById(devices, targetId);

    if (targetDevice === null) {
        return false;
    }

    if (updateData.isActive !== undefined) {
        targetDevice.isActive = updateData.isActive;
    }

    if (updateData.powerWatts !== undefined) {
        targetDevice.powerWatts = updateData.powerWatts;
    }

    return true;
};

const calculateActivePower = (devices) => {
    let totalPower = 0;

    for (let i = 0; i < devices.length; i++) {
        if (devices[i].isActive === true) {
        totalPower = totalPower + devices[i].powerWatts;
        }
    }

    return totalPower;
};

console.log("===== TRƯỚC KHI CẬP NHẬT =====");
for (let i = 0; i < devices.length; i++) {
    console.log(devices[i]);
}

console.log(
    "Tổng công suất đang hoạt động:",
    calculateActivePower(devices) + "W"
);

updateDeviceState(devices, "DEV01", {isActive: false});

updateDeviceState(devices, "DEV03", {powerWatts: 0});

console.log("\n===== SAU KHI CẬP NHẬT =====");
for (let i = 0; i < devices.length; i++) {
    console.log(devices[i]);
}

console.log(
    "Tổng công suất đang hoạt động:",
    calculateActivePower(devices) + "W"
);