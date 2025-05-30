function softuniStudents(input) {
    let courses = {};

    input.forEach(entry => {
        if (entry.includes(": ")) {
            let [course, capacity] = entry.split(": ");
            courses[course] = (courses[course] || { capacity: 0, students: [] });
            courses[course].capacity += Number(capacity);
        } else {
            let match = entry.match(/^(.+)\[(\d+)] with email (.+) joins (.+)$/);
            if (match) {
                let [, username, credits, email, course] = match;
                if (courses[course] && courses[course].students.length < courses[course].capacity) {
                    courses[course].students.push({ username, credits: Number(credits), email });
                }
            }
        }
    });

    Object.entries(courses)
        .sort(([, a], [, b]) => b.students.length - a.students.length)
        .forEach(([course, { capacity, students }]) => {
            console.log(`${course}: ${capacity - students.length} places left`);
            students
                .sort((a, b) => b.credits - a.credits)
                .forEach(({ username, credits, email }) =>
                    console.log(`--- ${credits}: ${username}, ${email}`)
                );
        });
}

softuniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore'])