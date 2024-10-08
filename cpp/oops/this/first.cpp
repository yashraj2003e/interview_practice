#include<bits/stdc++.h>
using namespace std;

/*

this -> special pointer pointing to the object which we have called

*/

class Point {
    int x, y;
    public:
    Point(int x,int y) {
        this->x = x;
        this->y = y;
    }
    Point& setX(int x) {
        this->x = x;
        return *this;
    }

    Point& setY(int y) {
        this->y = y;
        return *this;
    }

    void print() {
        cout << x << " " << y << endl;
    }
};

int main() {

    Point p(10, 20);
    p.print();

    (p.setX(30)).setY(40);

    p.print();
}