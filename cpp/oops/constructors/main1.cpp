#include<bits/stdc++.h>
using namespace std;

class Point {
    public:
    Point() {
        cout << "Hello" << endl;
    }
    Point(int x) {
        cout << "World" << endl;
    }
};

class Main {
    
    /*
    Member variables are first assigned some default values
    then initialized with 10, so less efficient !
    */
    
    Point p;
    public:
    Main() {
        p = Point(10);
    }
    /*

    Member variables are initialized in place rather than being default initialized and then assigned.

    Point p;
    public:
    Main() : p(10) {}
    */
};

int main() {
    // Point P;
    // P = Point(10);
    Main m;
}