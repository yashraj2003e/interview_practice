#include<bits/stdc++.h>
using namespace std;

/*
Static functions - used to modify and access static member variables of class !!


Static functions cannot use non-static member variables

because, they do not belong to any specific instance of a class, they dont have access to individual objects non-static members. without a this pointer they have no way to identify for which object we are trying to access !


but non-static functions can use static member variables


Static do not have this pointer, because they are for object !!

Static members are shared across all instances of the class
*/


class Player {
    static int count;
    public:
        Player() { count++; }
        ~Player() { count--; }
        static int getCount() {
            return count;
        }
};

/* Syntax to initialize static variables ! */
int Player::count = 0;

int main() {


/*
    Player p;
    cout << Player::count << endl;
    //or
    cout << p.count << endl;

    {
        Player p1;
        cout << Player::count << endl;
    }

    cout << Player::count << endl;
*/


    Player p;
    cout << Player::getCount() << endl;
    //or
    cout << p.getCount() << endl;

    {
        Player p1;
        cout << Player::getCount() << endl;
    }

    cout << Player::getCount() << endl;


}