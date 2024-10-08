#include<bits/stdc++.h>
using namespace std;

/* Create Copy Constructors by yourself when using
Pointers !!!
*/

class Point {
    int *ptr;
    public:
    Point(int x) {
        ptr = new int(x);
    }

    /* Copy Constructor to avoid conflicts */
    /* We pass by reference to avoid infinite recursion ! */
    Point(const Point &t) {
        int val = *(t.ptr);
        ptr = new int(val);
    }

    void set(int x) {
        *ptr = x;
    }

    void print() {
        cout << (*ptr) << endl;
    }
};

class Test {

    int x;
    public:
        Test(int y) {
            x = y;
        }
        void set(int y) {
            x = y;
        }
        void print() {
            cout << x << endl;
        }
};

int main() {
    // Point p(10);
    // Point p1(p);

    // p1.set(20);

    // p.print();
    // p1.print();

    Test t(10);
    Test t1(t);

    t1.set(20);
    t.print();
    t1.print();
}