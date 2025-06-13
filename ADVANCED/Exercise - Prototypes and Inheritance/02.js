(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        return !this.toString();
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        } else if (this.length <= n) {
            return this.toString();
        } else if (this.includes(" ")) {
            let words = this.split(" ");
            let result = [];

            for (let word of words) {
                let currStr = result.join(" ") + word;
                if (currStr.length + 3 <= n) {
                    result.push(word);
                } else {
                    break;
                }
            }

            return result.join(" ") + "..."
        }
        return this.slice(0, n - 3) + "...";
    }

    String.format = function (string, ...params) {
        return string.replace(/{(\d+)}/g, (match, group1) => {
            let index = Number(group1);
            return params[index] !== undefined ? params[index] : match;
        });
    };
})();