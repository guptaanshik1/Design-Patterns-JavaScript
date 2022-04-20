// Singletom pattern allows to create atmost 1 instance of an object

function Process (state) {
    this.state = state
}

const Singleton = (function () {
    function processManager () {
        this.numberOfProcesses = 0
    }

    let pm
    function createProcessManager () { // functions inside IIFE cannot be accessed outside
        pm = new processManager()
        return pm
    }

    return {
        getProcessManager: () => {
            if (!pm) {
                pm = createProcessManager()
            }
            return pm
        }
    }
}) ()

const pm1 = Singleton.getProcessManager()
const pm2 = Singleton.getProcessManager()
console.log(pm1 === pm2)
